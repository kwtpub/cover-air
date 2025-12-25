import fs from 'fs';
import path from 'path';


// Функция для нормализации hex цвета
function normalizeHex(hex) {
  hex = hex.toLowerCase();
  if (hex.length === 4) {
    // #fff -> #ffffff
    return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }
  return hex;
}

// Функция для конвертации RGB в hex
function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Функция для парсинга RGB/RGBA
function parseRgb(rgbStr) {
  const match = rgbStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/i);
  if (match) {
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    return rgbToHex(r, g, b);
  }
  return null;
}

// Функция для извлечения цветов из текста
function extractColors(text) {
  const colors = new Set();
  
  // Hex цвета (#fff, #ffffff)
  const hexPattern = /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g;
  let match;
  while ((match = hexPattern.exec(text)) !== null) {
    const hex = normalizeHex(match[0]);
    colors.add(hex);
  }
  
  // RGB/RGBA цвета
  const rgbPattern = /rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*[\d.]+\s*)?\)/gi;
  while ((match = rgbPattern.exec(text)) !== null) {
    const hex = parseRgb(match[0]);
    if (hex) {
      colors.add(hex);
    }
  }
  
  // Named colors (только основные)
  const namedColors = {
    'white': '#ffffff',
    'black': '#000000',
    'red': '#ff0000',
    'green': '#008000',
    'blue': '#0000ff',
    'yellow': '#ffff00',
    'cyan': '#00ffff',
    'magenta': '#ff00ff',
    'transparent': 'transparent'
  };
  
  const namedPattern = /\b(white|black|red|green|blue|yellow|cyan|magenta|transparent)\b/gi;
  while ((match = namedPattern.exec(text)) !== null) {
    const color = match[0].toLowerCase();
    if (namedColors[color]) {
      colors.add(namedColors[color]);
    }
  }
  
  return colors;
}

// Функция для рекурсивного поиска всех CSS и TSX файлов
function findFiles(dir, extensions, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Пропускаем node_modules и dist
      if (!file.includes('node_modules') && !file.includes('dist') && !file.includes('.git')) {
        findFiles(filePath, extensions, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// Основная функция
function analyzeColors() {
  const projectRoot = process.cwd();
  const cssFiles = findFiles(path.join(projectRoot, 'src'), ['.css']);
  const tsxFiles = findFiles(path.join(projectRoot, 'src'), ['.tsx']);
  
  const allColors = new Set();
  const colorSources = new Map();
  
  // Анализ CSS файлов
  cssFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const colors = extractColors(content);
    colors.forEach(color => {
      allColors.add(color);
      if (!colorSources.has(color)) {
        colorSources.set(color, []);
      }
      colorSources.get(color).push(path.relative(projectRoot, file));
    });
  });
  
  // Анализ TSX файлов (для inline стилей)
  tsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const colors = extractColors(content);
    colors.forEach(color => {
      allColors.add(color);
      if (!colorSources.has(color)) {
        colorSources.set(color, []);
      }
      colorSources.get(color).push(path.relative(projectRoot, file));
    });
  });
  
  // Сортировка цветов
  const sortedColors = Array.from(allColors).sort();
  
  console.log('='.repeat(80));
  console.log('АНАЛИЗ УНИКАЛЬНЫХ ЦВЕТОВ В ПРОЕКТЕ');
  console.log('='.repeat(80));
  console.log(`\nВсего уникальных цветов: ${sortedColors.length}\n`);
  
  // Группировка по типам
  const hexColors = sortedColors.filter(c => c.startsWith('#'));
  const transparent = sortedColors.filter(c => c === 'transparent');
  
  console.log(`Hex цвета: ${hexColors.length}`);
  console.log(`Transparent: ${transparent.length}`);
  console.log(`\nВсего: ${sortedColors.length}\n`);
  
  console.log('='.repeat(80));
  console.log('СПИСОК ВСЕХ УНИКАЛЬНЫХ ЦВЕТОВ:');
  console.log('='.repeat(80));
  
  sortedColors.forEach((color, index) => {
    const sources = colorSources.get(color) || [];
    const uniqueSources = [...new Set(sources)];
    console.log(`${(index + 1).toString().padStart(3, ' ')}. ${color.padEnd(10, ' ')} (в ${uniqueSources.length} файл${uniqueSources.length !== 1 ? 'ах' : 'е'})`);
    if (uniqueSources.length <= 3) {
      uniqueSources.forEach(source => {
        console.log(`     └─ ${source}`);
      });
    } else {
      uniqueSources.slice(0, 2).forEach(source => {
        console.log(`     └─ ${source}`);
      });
      console.log(`     └─ ... и еще ${uniqueSources.length - 2} файл${uniqueSources.length - 2 !== 1 ? 'ов' : ''}`);
    }
  });
  
  console.log('\n' + '='.repeat(80));
}

// Запуск анализа
analyzeColors();


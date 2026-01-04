# COVER AIR - React Frontend

Фронтенд приложение для платформы COVER AIR, построенное на React + TypeScript + Vite.

## Доступные команды

### Разработка
```bash
npm run dev
```
Запускает сервер разработки с горячей перезагрузкой (HMR).
- Приложение будет доступно по адресу: `http://localhost:5173`
- Изменения в коде автоматически отображаются в браузере

### Сборка проекта
```bash
npm run build
```
Собирает проект для production:
1. Проверяет TypeScript типы (`tsc -b`)
2. Создает оптимизированную сборку (`vite build`)
3. Результат сохраняется в папку `dist/`

### Линтинг
```bash
npm run lint
```
Проверяет код на соответствие стандартам ESLint.
- Находит потенциальные ошибки
- Проверяет стиль кода
- Рекомендует улучшения

### Предварительный просмотр
```bash
npm run preview
```
Запускает локальный сервер для просмотра production-сборки.
- Используется после `npm run build`
- Показывает, как приложение будет работать в production

## Структура проекта

```
client/
├── public/             # Статические файлы (изображения, иконки)
├── src/
│   ├── features/       # Компоненты функций (agent, international-payments и т.д.)
│   ├── shared/         # Общие компоненты (header, footer, UI)
│   ├── App.tsx         # Главный компонент приложения
│   └── main.tsx        # Точка входа
├── index.html          # HTML шаблон
└── vite.config.ts      # Конфигурация Vite
```

## Технологии

- **React 19** - Библиотека для создания UI
- **TypeScript** - Типизированный JavaScript
- **Vite** - Быстрый сборщик и dev-сервер
- **ESLint** - Инструмент для проверки качества кода

## React Compiler

React Compiler не включен в этот шаблон из-за влияния на производительность разработки и сборки. Для добавления см. [документацию](https://react.dev/learn/react-compiler/installation).

## Расширение конфигурации ESLint

Для production приложения рекомендуется обновить конфигурацию для включения type-aware lint правил:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Другие конфиги...

      // Замените tseslint.configs.recommended на:
      tseslint.configs.recommendedTypeChecked,
      // Или используйте это для более строгих правил:
      tseslint.configs.strictTypeChecked,
      // Опционально добавьте стилистические правила:
      tseslint.configs.stylisticTypeChecked,

      // Другие конфиги...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // другие опции...
    },
  },
])
```

Также можно установить [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) и [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) для React-специфичных lint правил:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Другие конфиги...
      // Включить lint правила для React
      reactX.configs['recommended-typescript'],
      // Включить lint правила для React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // другие опции...
    },
  },
])
```

import { useEffect, useRef } from 'react';
import './PipelineBackground.css';

const PipelineBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Утилиты из util.js
    const { PI, cos, sin, abs, round, random } = Math;
    const HALF_PI = 0.5 * PI;
    const TAU = 2 * PI;
    const TO_RAD = PI / 180;
    const rand = (n: number) => n * random();
    const fadeInOut = (t: number, m: number) => {
      const hm = 0.5 * m;
      return abs((t + hm) % m - hm) / hm;
    };

    // Параметры pipeline
    const pipeCount = 30;
    const pipePropCount = 8;
    const pipePropsLength = pipeCount * pipePropCount;
    const turnCount = 8;
    const turnAmount = (360 / turnCount) * TO_RAD;
    const turnChanceRange = 58;
    const baseSpeed = 0.5;
    const rangeSpeed = 1;
    const baseTTL = 100;
    const rangeTTL = 300;
    const baseWidth = 2;
    const rangeWidth = 4;
    const baseHue = 180; // Бирюзовый оттенок
    const rangeHue = 60;
    const backgroundColor = 'hsla(0, 0%, 0%, 1)'; // Черный фон

    // Создаем два canvas: один для рисования, другой для отображения
    const canvasA = document.createElement('canvas');
    const canvasB = canvas;
    const ctxA = canvasA.getContext('2d');
    const ctxB = canvasB.getContext('2d');
    
    if (!ctxA || !ctxB) return;

    let center: [number, number] = [0, 0];
    let tick = 0;
    let pipeProps: Float32Array;
    // Массив для хранения предыдущих позиций (x, y) для каждой трубы
    const prevPositions = new Float32Array(pipeCount * 2);

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      
      canvasA.width = innerWidth;
      canvasA.height = innerHeight;
      
      if (canvasB.width > 0 && canvasB.height > 0) {
        ctxA.drawImage(canvasB, 0, 0);
      }
      
      canvasB.width = innerWidth;
      canvasB.height = innerHeight;
      
      ctxB.drawImage(canvasA, 0, 0);
      
      center[0] = 0.5 * canvasA.width;
      center[1] = 0.5 * canvasA.height;
    };

    const initPipe = (i: number) => {
      const x = rand(canvasA.width);
      const y = center[1];
      const direction = round(rand(1)) ? HALF_PI : TAU - HALF_PI;
      const speed = baseSpeed + rand(rangeSpeed);
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const width = baseWidth + rand(rangeWidth);
      const hue = baseHue + rand(rangeHue);

      pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);
      
      // Инициализируем предыдущую позицию
      const pipeIndex = i / pipePropCount;
      prevPositions[pipeIndex * 2] = x;
      prevPositions[pipeIndex * 2 + 1] = y;
    };

    const initPipes = () => {
      pipeProps = new Float32Array(pipePropsLength);
      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        initPipe(i);
      }
    };

    const drawPipe = (x: number, y: number, prevX: number, prevY: number, life: number, ttl: number, width: number, hue: number) => {
      const alpha = fadeInOut(life, ttl) * 0.125;
      
      // Рисуем линию от предыдущей позиции к текущей
      if (prevX !== x || prevY !== y) {
        ctxA.save();
        ctxA.strokeStyle = `hsla(${hue},75%,50%,${alpha})`;
        ctxA.lineWidth = width;
        ctxA.beginPath();
        ctxA.moveTo(prevX, prevY);
        ctxA.lineTo(x, y);
        ctxA.stroke();
        ctxA.closePath();
        ctxA.restore();
      }
      
      // Рисуем круг в текущей позиции
      ctxA.save();
      ctxA.strokeStyle = `hsla(${hue},75%,50%,${alpha})`;
      ctxA.beginPath();
      ctxA.arc(x, y, width, 0, TAU);
      ctxA.stroke();
      ctxA.closePath();
      ctxA.restore();
    };

    const updatePipe = (i: number) => {
      const i2 = 1 + i;
      const i3 = 2 + i;
      const i4 = 3 + i;
      const i5 = 4 + i;
      const i6 = 5 + i;
      const i7 = 6 + i;
      const i8 = 7 + i;

      const pipeIndex = i / pipePropCount;
      
      // Получаем текущую позицию
      let x = pipeProps[i];
      let y = pipeProps[i2];
      let direction = pipeProps[i3];
      const speed = pipeProps[i4];
      let life = pipeProps[i5];
      const ttl = pipeProps[i6];
      const width = pipeProps[i7];
      const hue = pipeProps[i8];

      // Получаем предыдущую позицию
      const prevX = prevPositions[pipeIndex * 2];
      const prevY = prevPositions[pipeIndex * 2 + 1];

      // Рисуем трубу с линией от предыдущей позиции к текущей
      drawPipe(x, y, prevX, prevY, life, ttl, width, hue);

      // Обновляем координаты
      life++;
      x += cos(direction) * speed;
      y += sin(direction) * speed;
      const turnChance = !(tick % round(rand(turnChanceRange))) && (!(round(x) % 6) || !(round(y) % 6));
      const turnBias = round(rand(1)) ? -1 : 1;
      direction += turnChance ? turnAmount * turnBias : 0;

      // Проверка границ
      if (x > canvasA.width) x = 0;
      if (x < 0) x = canvasA.width;
      if (y > canvasA.height) y = 0;
      if (y < 0) y = canvasA.height;

      // Сохраняем обновленные координаты
      pipeProps[i] = x;
      pipeProps[i2] = y;
      pipeProps[i3] = direction;
      pipeProps[i5] = life;

      // Сохраняем текущую позицию как предыдущую для следующего кадра
      prevPositions[pipeIndex * 2] = x;
      prevPositions[pipeIndex * 2 + 1] = y;

      if (life > ttl) {
        initPipe(i);
      }
    };

    const updatePipes = () => {
      tick++;
      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        updatePipe(i);
      }
    };

    const render = () => {
      // Очистка canvasB с черным фоном
      ctxB.save();
      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, canvasB.width, canvasB.height);
      ctxB.restore();

      // Копируем canvasA на canvasB с blur эффектом
      ctxB.save();
      ctxB.filter = 'blur(12px)';
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();

      // Копируем canvasA на canvasB без blur для четкости
      ctxB.save();
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    };

    const draw = () => {
      updatePipes();
      render();
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    resize();
    initPipes();
    draw();

    const handleResize = () => {
      resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="pipeline-background" />;
};

export default PipelineBackground;


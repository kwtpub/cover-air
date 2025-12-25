# Стадия сборки
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package.json package-lock.json* ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Стадия production
FROM node:20-alpine

WORKDIR /app

# Копируем package.json для установки только production зависимостей
COPY package.json package-lock.json* ./

# Устанавливаем только production зависимости
RUN npm ci --only=production

# Копируем собранные файлы из стадии сборки
COPY --from=builder /app/dist ./dist

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["node", "dist/index.js"]


# Встановлення Node.js базового образу
FROM node:18-alpine

# Створення робочої директорії
WORKDIR /app

# Копіювання package.json і package-lock.json
COPY package*.json ./

# Встановлення залежностей
RUN npm install

# Копіювання всіх файлів в робочу директорію
COPY . .

# Збірка проєкту
RUN npm run build

# Відкриття порту 3000
EXPOSE 3000

# Запуск Next.js додатка
CMD ["npm", "run", "start"]

FROM node:22.21-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./

RUN npm install

COPY . .

# EXPOSE 3000

CMD ["npm", "run", "dev"]
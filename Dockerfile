FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i 

COPY . .

ENV PORT 3000

EXPOSE $PORT

#CMD ["node", "src/index.js"]
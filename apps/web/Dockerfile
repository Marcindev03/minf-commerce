FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma

COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npx prisma generate

EXPOSE 3000

CMD [ "npm", "run", "start" ]

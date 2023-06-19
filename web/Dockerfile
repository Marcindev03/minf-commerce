FROM node:18

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY tsconfig.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

RUN npx prisma migrate deploy

RUN npx prisma generate

EXPOSE 4000

CMD [ "npm", "run", "start" ]
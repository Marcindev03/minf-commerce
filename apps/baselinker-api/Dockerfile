FROM node:18

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE 4040

CMD [ "npm", "run", "start" ]

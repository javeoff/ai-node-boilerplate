# ---- Development Build ----
FROM node:18 as development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# ---- Production Build ----
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:18-alpine as production

WORKDIR /app

COPY package*.json ./

RUN npm i --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]

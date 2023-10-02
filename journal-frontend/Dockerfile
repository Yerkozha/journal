FROM node:16

WORKDIR /journal

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build


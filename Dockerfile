FROM node:14.15.4

WORKDIR /src/app

COPY ./package.json /src/app

COPY ./yarn.lock /src/app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
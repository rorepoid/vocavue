FROM node:18.16.1-alpine

WORKDIR /usr/src/vocavue

COPY . /usr/src/vocavue

RUN apk update && apk upgrade

RUN npm install

RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE ${NUXT_PORT}

CMD [ "npm", "start" ]

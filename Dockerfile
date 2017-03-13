FROM node:6-alpine

WORKDIR /src

ADD . /src

RUN npm install && npm run build

CMD node .

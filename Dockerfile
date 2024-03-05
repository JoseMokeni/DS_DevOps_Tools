FROM node:slim

WORKDIR /

COPY . .

RUN npm install

ENV PORT=5000

ENV environment=prod

EXPOSE $PORT

CMD [ "npm", "run", "server" ]

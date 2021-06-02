FROM node:16.1.0
RUN npm i -g webpack
RUN npm i -g ts-node
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["ts-node", "./server/server.ts"]

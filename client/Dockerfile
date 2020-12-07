# Use an official node runtime as a parent image
FROM node:10

RUN npm install -g react-scripts

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
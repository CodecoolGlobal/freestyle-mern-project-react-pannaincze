# Create image based on the official Node image from dockerhub
FROM node:lts-alpine3.19


WORKDIR /usr/src/app


COPY package.json /usr/src/app
RUN npm install

#COPY package-lock.json /usr/src/app
#RUN npm install

COPY . /usr/src/app

EXPOSE 5000

CMD ["npm", "start"]

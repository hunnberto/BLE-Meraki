FROM node:18-alpine3.17

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

COPY . . 

RUN npm install
RUN npm config list

EXPOSE 3000

CMD ["npm", "run", "start-dev"]

FROM node:16-alpine

WORKDIR "/usr/src/app"

COPY . .

EXPOSE 3000

RUN npm install
 
CMD npm run start
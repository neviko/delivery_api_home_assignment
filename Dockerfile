FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

# ci will instal the EXACT depencencies, so it's a better practice to use it over npm install
RUN npm ci

COPY . .

CMD ["npm", "start"]
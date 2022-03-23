FROM node:14
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./
ENV NODE_ENV staging
RUN npm install
COPY . .  
EXPOSE 5500
CMD [ "node", "index.js" ]
FROM node:14
WORKDIR /app
COPY package.json /app/
ENV NODE_ENV staging
RUN npm install
COPY . /app/
EXPOSE 5500
CMD [ "node", "index.js" ]
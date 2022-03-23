FROM mhart/alpine-node:14
RUN apk add g++ make python3
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY package.json ./
RUN npm install
COPY . .
# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3000
EXPOSE ${PORT}
CMD [ "npm", "start"]
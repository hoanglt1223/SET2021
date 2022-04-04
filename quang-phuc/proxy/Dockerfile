FROM node:14

RUN npm install -g local-cors-proxy
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8010

CMD [ "lcp", "--proxyUrl", "http://localhost:3001" ]

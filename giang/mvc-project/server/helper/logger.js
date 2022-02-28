const axios = require("axios");

async function logger(type, message) {
  await axios.post(`${process.env.LOGGER_SERVER_API_URL}/save-log`, {
    type,
    message,
  });
}

module.exports = logger;

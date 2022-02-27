function errorHandler(res, message) {
  res.end(JSON.stringify({ error: message }));
}

module.exports = errorHandler;

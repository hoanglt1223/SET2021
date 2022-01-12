function getBodyData(req, callback) {
  let rawData = "";
  req.on("data", (chunk) => {
    rawData += chunk.toString(); // convert Buffer to string
  });

  req.on("end", () => {
    const data = JSON.parse(rawData);
    callback(data);
  });
}

module.exports = getBodyData;

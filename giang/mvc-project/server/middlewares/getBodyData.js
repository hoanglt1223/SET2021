function getBodyData(req) {
  return new Promise((resolve) => {
    let rawData = "";
    req.on("data", (chunk) => {
      rawData += chunk.toString(); // convert Buffer to string
    });

    req.on("end", () => {
      const data = JSON.parse(rawData);
      req.body = data;

      console.log({ data });

      resolve();
    });
  });
}

module.exports = getBodyData;

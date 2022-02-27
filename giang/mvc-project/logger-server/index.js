const express = require("express");
const logger = require("./winston");

const app = express();
const port = 3003;

app.use(express.static("public"));

app.get("/", function (req, res) {
  logger.info("Info log %");
  logger.warn("Warning log");
  logger.error(new Error("Error log"));

  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

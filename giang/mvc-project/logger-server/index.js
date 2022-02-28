const express = require("express");
const logger = require("./winston");
const { LogInfoType } = require("./constants");

const app = express();
const port = 3004;

app.use(express.static("public"));
app.use(express.json());

// INFO: log body have structure:
// interface ILogBody{
//   type: LogInfoType
//   message: string
// }

app.post("/save-log", function (req, res) {
  const logInfo = req.body;

  console.log({ logInfo });

  switch (logInfo.type) {
    case LogInfoType.INFO:
      logger.info(logInfo.message);
      break;
    case LogInfoType.ERROR:
      logger.error(logInfo.message);
      break;
    case LogInfoType.WARNING:
      logger.warning(logInfo.message);
      break;
    default:
      break;
  }

  if (logInfo.type === LogInfoType.INFO) {
    logger.info(logInfo.message);
  }

  res.send("Saved");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

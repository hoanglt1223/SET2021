const fs = require("fs");

const imageController = {
  getImage,
};

function getImage(_, res) {
  return serveStaticFile(res, "/images/demo.jpeg", "image/jpeg");
}

module.exports = imageController;

function serveStaticFile(res, path, contentType, responseCode) {
  if (!responseCode) responseCode = 200;
  const dirPath = formatDirPath(__dirname);

  fs.readFile(dirPath + path, function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });

      return res.end("500 - Internal Error");
    } else {
      console.log({ contentType });
      res.writeHead(responseCode, {
        "Content-Type": contentType,
        "Content-Length": data.buffer.byteLength,
      });
      return res.end(data);
    }
  });
}

function formatDirPath(dirPath) {
  const pathArr = dirPath.split("/");
  const formatPathArr = pathArr.filter((path) => {
    return path !== "controller";
  });

  const formatPath = formatPathArr.join("/");
  return formatPath;
}

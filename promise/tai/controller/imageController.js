const fs = require("fs");
const imageController = {
  getImage
};

function getImage(url, res, req){
  fs.readFile("images/cat.png", function (err, data) {
    if (err) throw err; // Fail if the file can't be read.
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(data); // Send the file data to the browser.
  });
}

module.exports = imageController;
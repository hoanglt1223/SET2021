const fs = require('fs');

const ImageController = function () {
  this.getImage = (req, res) => {
    fs.readFile("image.png", function (err, data) {
      if (err) throw err; // Fail if the file can't be read.
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data); // Send the file data to the browser.
    });
  };
};

module.exports = ImageController;


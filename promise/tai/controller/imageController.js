const fs = require("fs");
const imageController = {
  getImage
};

function getImage(url, res, req){
  fs.readFile("images/cat.png", function (err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(data); 
  });
}

module.exports = imageController;
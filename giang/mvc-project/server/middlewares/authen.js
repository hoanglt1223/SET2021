const errorHandler = require("../helper/errorHandler");

function authenMiddlware(req, res) {
  return new Promise((resolve) => {
    if (req.user) {
      resolve();
    } else {
      errorHandler("Unauthorized user!");
    }
  });
}

module.exports = authenMiddlware;

const errorHandler = require("../helper/errorHandler");

function authenMiddlware(req, res) {
  return new Promise((resolve) => {
    if (req.user) {
      resolve();
    } else {
      errorHandler(res, "Unauthorized user!");
    }
  });
}

module.exports = authenMiddlware;

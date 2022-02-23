const jwt = require("jsonwebtoken");

function saveUser(req) {
  return new Promise((resolve) => {
    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.SECRET_KEY,
        function (err, decode) {
          if (err) req.user = undefined;
          req.user = decode;
          resolve();
        }
      );
    } else {
      req.user = undefined;
      resolve();
    }
  });
}

module.exports = saveUser;

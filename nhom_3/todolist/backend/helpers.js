const url = require("url");
function handleError(error, filePath = "", functionName = "") {
  console.error(`${filePath} -> ${functionName} -> Error:`, error);
}

function handleAuthResponse(response, isSuccessful = false) {
  const data = {
    status: isSuccessful ? "success" : "fail",
  };
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(data));
}

function handleNotFound(req, res) {
  const parsedUrl = url.parse(req.url, true);
  res.statusCode = 404;
  res.end(`Route ${parsedUrl.pathname} not found.`);
}

module.exports = { handleError, handleAuthResponse, handleNotFound };

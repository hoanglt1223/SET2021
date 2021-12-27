const BaseController = function () {

  this.getHomePage = (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end('hello world');
  }
  this.getErrorPage = (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end('Error 404');
  }
}
module.exports = BaseController;
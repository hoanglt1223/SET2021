const baseController = require("../controllers/baseController");
const {Router} = require("./index");
const BaseRouter = function () {
  this.GET = {
    '/': baseController.getHomePage,
    '/_error': baseController.getErrorPage,
  }
  Router.call(this);

}

module.exports = BaseRouter;
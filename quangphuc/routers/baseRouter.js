const {baseController} = require('../controllers/index');
const Router = require("./router");

const BaseRouter = function () {
  this.GET = {
    '/': baseController.getHomePage,
    '/_error': baseController.getErrorPage,
  };
  //Router.call(this);
}

const baseRouter = new BaseRouter();

module.exports = baseRouter;
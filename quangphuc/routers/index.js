const {getPathAndQuery} = require("../utilities");
const taskRouter = require("./taskRouter");
const baseRouter = require("./baseRouter");
const imageRouter = require("./imageRouter");

const RouterFactory = function() {
  this.router;

  this.getRouter = (req, res) => {
    const { path, query } = getPathAndQuery(req);

    switch (path[0]) {
      case undefined:
        this.router = baseRouter;
        break;
      case 'tasks':
        this.router = taskRouter;
        break;
      case 'image':
        this.router = imageRouter;
        break;
      default:
        this.router = baseRouter;
        break;
    }
    return this.router;
  }
}



const routerFactory = new RouterFactory();

module.exports = {routerFactory};
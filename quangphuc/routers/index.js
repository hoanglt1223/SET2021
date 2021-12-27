const {getPathAndQuery} = require("../utilities");
const BaseRouter = require("./baseRouter");
const taskRouter = require("./taskRouter");

const Router = function(GET, POST, DELETE, PATCH) {
  this.GET = GET;
  this.POST = POST;
  this.DELETE = DELETE;
  this.PATCH = PATCH;
  this.instance;


  //singleton
  this.getInstance = (req, res) => {
    const { path, query } = getPathAndQuery(req);

    switch (path[0]) {
      case undefined:
        this.instance = new BaseRouter();
        break;
      case 'tasks':
        this.instance = taskRouter;
        console.log(taskRouter);
        break;
      case 'image':
        //this.instance = new ImageRouter();
        break;
      default:
        this.instance = new BaseRouter();
        break;
    }
    return this.instance;
  }

  this.handle = async (req, res) => {
    console.log('handle')
    const { path, query } = getPathAndQuery(req);
    const handler = this[req.method]['/' + path[0] + (path[1] ? '/{id}' : '')];
    if(handler){
      await handler(req, res);
    }
    else {
      const baseRouter = new BaseRouter();
      await baseRouter['GET']['/_error'](req, res);
    }
  }
}

const router = new Router();
module.exports = {
  Router,
  router
}
const {getPathAndQuery} = require("../utilities");
const baseRouter = require("./baseRouter");

const Router = function () {
  this.handle = async (req, res) => {
    const { path, query } = getPathAndQuery(req);
    const handler = this[req.method]['/' + path[0] + (path[1] ? '/{id}' : '')];
    if(handler){
      await handler(req, res);
    }
    else {
      await baseRouter['GET']['/_error'](req, res);
    }
  }
}
module.exports = Router;
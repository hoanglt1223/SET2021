const url = require('url')
const { handleError } = require('../helpers')
const routes = require('./routes');


function route(req) {
  const parsedUrl = url.parse(req.url, true)
  if (routes[req.method] && routes[req.method][parsedUrl.pathname]) {
    const currentRouteData = routes[req.method][parsedUrl.pathname]
    if (currentRouteData.middlewares && currentRouteData.middlewares.length > 0) {
      return function controller(req, res) {
        try {
          let promise = currentRouteData.middlewares[0](req, res)
          currentRouteData.middlewares.forEach((middleware, index) => {
            if (index > 0) {
              promise.then(() => middleware(req, res))
            }
          })
          // Call controller after all interceptor (middlewares)
          promise.then(() => currentRouteData.controller(req, res))
          return promise
        }
        catch (error) {
          handleError(error, 'router.js', 'route() -> controller()')
          res.statusCode = 500
          res.end()
        }
      }
    }

    return routes[req.method][parsedUrl.pathname].controller
  }

  return routes['FAIL'].handleFail;
}

module.exports = { route }
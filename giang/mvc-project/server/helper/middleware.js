module.exports = function (router, req, res) {
  const routeUrl = req.url.split("?")[0];
  const method = req.method;

  const route = router[method][routeUrl];

  console.log({ route, method, routeUrl });

  if (route?.middlewares?.length > 0) {
    let middlewarePromise = route.middlewares[0](req, res);
    let controller = route.controller;

    route.middlewares.forEach((middleware, index) => {
      if (index > 0) {
        middlewarePromise = middlewarePromise.then(() => middleware(req, res));
      }
    });

    middlewarePromise.then(() => {
      controller(req, res);
    });
  } else {
    const controller = route?.controller;
    if (!controller) {
      return;
    }

    controller(req, res);
  }
};

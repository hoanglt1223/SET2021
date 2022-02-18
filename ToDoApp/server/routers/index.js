const Router = require('./helper')
const url = require('url')
const handleError = require('../helper')

function route(request) {
    const parsedURL = url.parse(request.url, true);
    if (Router[request.method] && Router[request.method][parsedURL.pathname]) {
        console.log(`${request.method}  ${parsedURL.pathname}`)
        debugger
        const currentRouter = Router[request.method][parsedURL.pathname];
        if (currentRouter.middlewares && currentRouter.middlewares.length > 0) {
            return function controller(request, response) {
                try {
                    let progress = currentRouter.middlewares[0](request, response);
                    currentRouter.middlewares.forEach((middleware, index) => {
                        if (index > 0) {
                            progress.then(() => middleware(request, response))
                        }
                    })

                    progress.then(() => {
                        currentRouter.controller(request, response);
                    })
                } catch (error) {
                    console.log('Error: ', error)
                }
            }
        }
    }
    return function controller(request, response) {
        response.send('OK');
    }
}


module.exports = { route }
const { handleError } = require('../helper')


function parseRequestBody(request, response) {
    try {
        debugger;
        return new Promise((resolve, reject) => {
            let chunks = [];
            request
                .on('data', (chunk) => {
                    chunks.push(chunk);
                })
                .on('end', () => {
                    const dataBody = JSON.parse(chunks.length > 0 ? chunks : {});
                    request.body = dataBody;
                    resolve();
                })
                .on('error', (error) => {
                    handleError(error, './middlewares/parseRequestBody.js', 'parseRequestBody');
                    reject(error);
                })
        })
    }
    catch (error) {
        if (error) {
            handleError(error, './middlewares/parseRequestBody.js', 'parseRequestBody')
        }
        const message = error.message || 'Invalid request!'
        response.statusCode = 401;
        response.end(message);
    }
}


module.exports = parseRequestBody

const parseRequestBody = require('../middlewares/')

const Router = {
    'GET' :{
        'projects':{
            middlewares : [parseRequestBody]
        }
    },

    'POST' : {
        'add-project' : {
            middlewares : [parseRequestBody],
            controller: (request, response) => {
                console.log(request.body);
                response.end('ok')
            }
        }
    },


    'DELETE':{

    },

    'PUT' : {

    },

    'PATH' : {

    }
}

module.exports = Router
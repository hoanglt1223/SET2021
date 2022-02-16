import axios from "axios"


const portServer = "http://localhost:5500";
const projectPath = '/projects'

const getMethod = (api) => {
    return axios.get(`${portServer}/${api}`, JSON.stringify({}))
}

const postMethod = (api, data) => {
    return axios.post(`${portServer}/${api}`, JSON.stringify(data))
}

const deleteMethod = (api, data) => {
    return axios.request({data:  data, method: 'delete', url: `${portServer}/${api}`})
    
}

export {getMethod, postMethod, deleteMethod}
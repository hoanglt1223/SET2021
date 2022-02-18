import axios from "axios"


const portServer = "http://localhost:5500";
const projectPath = '/projects'


const getMethod = (url) => {
    return axios.get(`${portServer}/${url}`, JSON.stringify({}))
}

const postMethod = (url, data) => {
    return axios.post(`${portServer}/${url}`, JSON.stringify(data))
}

const deleteMethod = (url, data) => {
    return axios.request({data:  JSON.stringify(data), method: 'delete', url: `${portServer}/${url}`})
    
}

const updateMethod = (url, data) => {
    return axios.request({method: 'patch', url: `${portServer}/${url}`, data: JSON.stringify(data)})
}

export {getMethod, postMethod, deleteMethod, updateMethod}
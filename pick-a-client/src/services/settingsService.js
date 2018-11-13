import axios from 'axios';

function getAll(){
    let url = "/api/settings"
    const config = {
        method: 'GET'
    }
    return axios(url, config)
        .then(console.log)
        .catch(console.log)
}

function create(data){
    let url = "/api/settings"
    const config = {
        method: 'POST',
        data: data
    }
    return axios(url, config)
        .then(console.log)
        .catch(console.log)
}

export { getAll, create }
import axios from 'axios';

function getAll(){
    let url = "/api/settings"
    const config = {
        method: 'GET'
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function create(data){
    let url = "/api/settings"
    const config = {
        method: 'POST',
        data: data
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function searchById(id){
    let url = "/api/settings/search/" + id;
    const config = {
        method: 'GET'
    }
    return axios(url,config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function deleteById(id){
    let url = "/api/settings/" + id;
    const config = {
        method: 'DELETE'
    }
    return axios(url, config)
}

function updateById(data){
    let url = "/api/settings/" + data.id;
    const config = {
        method: 'PUT',
        data: data
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function getById(id){
    let url = "/api/settings/" + id;
    const config = {
        method: 'GET'
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

export { getAll, create, searchById, deleteById, updateById, getById }

function responseSuccessHandler(response){
    return response.data
}

function responseErrorHandler(err){
    console.log(err)
}
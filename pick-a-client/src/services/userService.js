import axios from 'axios'

function register(data){
    let url = "/api/users/register"
    const config = {
        method: 'POST',
        data: data
    }
    return axios(url, config)
}

function login(data){
    let url = "/api/users/login"
    const config ={
        method: 'POST',
        data: data
    }
    return axios(url, config)
}

function logout(){
    let url = "/api/users/logout"
    const config = {
        method: 'GET'
    }
    return axios(url, config)
}

export { register, login, logout }
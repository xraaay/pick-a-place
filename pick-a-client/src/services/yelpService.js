import axios from "axios";

function search(data){
    // let str = ''
    // for(let x in queryString){
    //     str = str.concat(`${x}=${queryString[x]}&`)
    // }
    let url = "/api/yelp"
    // const data = {
    //     data: data
    // }
    const config = {
        method: 'POST',
        data: data
    }
    return axios(url, config)
}

export { search }
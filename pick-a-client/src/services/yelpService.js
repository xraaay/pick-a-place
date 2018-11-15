import axios from "axios";

function search(data){
    let url = "/api/yelp"
    const config = {
        method: 'POST',
        data: data
    }
    return axios(url, config)
}

export { search }
import axios from "axios";

function search(data){
    let url = "/api/yelp"
    const config = {
        method: 'POST',
        data: data
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function scrape(str){
    let alias = "https://www.yelp.com/biz/" + str
    let url = "/api/yelp/wait";
    const config = {
        method: 'POST',
        data: {
            value: alias
        }
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function responseSuccessHandler(response){
    return response.data
}

function responseErrorHandler(err){
    console.log(err)
}
export { search, scrape }
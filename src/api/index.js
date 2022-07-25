import axios from 'axios';

const config={
    baseUrl: 'http://localhost:8090/'
}

function fetchPostsList(){
    return axios.get(`${config.baseUrl}post`);
}

export {
    fetchPostsList
}
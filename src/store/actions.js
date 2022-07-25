import {fetchPostsList} from '../api/index.js';

export default {
    FETCH_POSTS(context){
        fetchPostsList()
        .then(response => {
            console.log(response);
            context.commit('SET_POSTS', response.data.response);
        })
        .catch(error => console.log(error));
    },
}
import axios from "axios";

const baseUrl = 'https://nonameproject-4c058-default-rtdb.firebaseio.com';
const jsonPlaceholder = 'https://jsonplaceholder.typicode.com';



export const ProfileApi = {

    fetchPosts: ()=> axios.get(baseUrl + `/posts.json`),

    addPost: post =>axios.post(baseUrl + `/posts.json`, post),

    deletePost: id => axios.delete(baseUrl + `/posts/${id}.json`),


}

export const NewsApi = {

    fetchNews: ()=> axios.get(jsonPlaceholder + `/posts`)
}




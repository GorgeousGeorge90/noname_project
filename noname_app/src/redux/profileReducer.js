import {ProfileApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const SHOW_POSTS = "SHOW_POSTS";
const DELETE_POST = "DELETE_POST";


const initialState = {
    posts: [],
}

export const profileReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, action.payload],
            }
    }

        case SHOW_POSTS: {
            return {
                ...state,
                posts: action.payload,

            }
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post=>post.id =! action.payload)
            }
        }


        default:
            return state
        }
}

export const addPost = (payload) => ({
    type: ADD_POST,
    payload,
})

export  const showPosts = (payload) => ({
    type: SHOW_POSTS,
    payload
})

export const deletePost = (payload) => ({
    type: DELETE_POST,
    payload,
})


export const fastFetchPosts = ()=>{
    return (dispatch)=> {
        ProfileApi.fetchPosts()
            .then(response=>{
                const payload = Object.keys(response.data).map(key => {
                    return {
                        ...response.data[key],
                        id: key,
                    }
                })
                dispatch(showPosts(payload))
            })
    }
}

export const addNewPost = (text,id)=>{
    return (dispatch)=> {
        const post = {
            id,
            text,
        }
        ProfileApi.addPost(post)
            .then(()=>{
                dispatch(addPost(post))
            })
    }
}


export const deleteOldPost = (id)=>{
    return (dispatch)=> {
        ProfileApi.deletePost(id)
            .then(()=>{
                dispatch(deletePost(id))
            })
    }
}
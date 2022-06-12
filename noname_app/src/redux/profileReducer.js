import {ProfileApi} from '../api/api';
import {reset} from "redux-form";


const ADD_POST = 'ADD_POST';
const SHOW_POSTS = 'SHOW_POSTS';
const DELETE_POST = 'DELETE_POST';
const NO_POST = 'NO_POST';



const initialState = {
    posts: [],
    noPost: false,
}

export const profileReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, action.payload],
                noPost: false,
            }
    }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post=>post.id !== action.payload)
            }
        }

        case SHOW_POSTS: {
            return {
                ...state,
                posts: action.payload,

            }
        }

        case NO_POST: {
            return {
                ...state,
                noPost: true,
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

const noPost = ()=> ({type: NO_POST})


export const fastFetchPosts = () => {
    return (dispatch) => {
        ProfileApi.fetchPosts()
            .then(response => {
                if (!response.data) {
                   dispatch(noPost())
                } else {
                    const payload = Object.keys(response.data).map(key => {
                        return {
                            ...response.data[key],
                            id: key,
                        }
                    })
                    dispatch(showPosts(payload))
                }
            })
    }
}

export const addNewPost = (text)=>{
    return (dispatch)=> {
        const post = {text}
        ProfileApi.addPost(post)
            .then(response=>{
                const payload = {
                    ...post,
                    id: response.data.name
                }
                dispatch(addPost(payload))
            })
            .then(()=>{
                dispatch(reset('post'))
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


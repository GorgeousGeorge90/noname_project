import {NewsApi} from "../api/api";

const SHOW_NEWS = 'SHOW_NEWS';



const initialState = {
     posts:[]
}

const newsReducer = (state=initialState,action)=> {
    switch (action.type) {
        case SHOW_NEWS: {
            return {
                ...state,
                posts: action.payload,
            }
        }

        default: {
            return state
        }
    }
}

const showPosts = payload => ({type: SHOW_NEWS, payload})

export const fetchPosts = ()=>{
    return dispatch => {
        NewsApi.fetchNews()
            .then(response=>{
               dispatch(showPosts(response.data))
            })
    }
}

export default newsReducer
const ADD_POST = 'ADD_POST';
const POST_UPDATE = "POST_UPDATE";

const initialState = {
    posts: [
        {id: 0, text: 'Hello World!'},
        {id: 1, text: 'I am no Superman!'},
        {id: 2, text: 'Yoa are so sexy!'},
    ],
    newPostTest: '',
}

export const profileReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length,
                text: action.payload,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
    }

        case POST_UPDATE: {
            return {
                ...state,
                newPostTest: action.payload,
            }

        }
        default:
            return state
        }
}

export const addPost = (text)=> ({
        type: ADD_POST,
        payload: text,
})

// export const updatePost = (text)=> {
//     return {
//         type: POST_UPDATE,
//         payload: text,
//     }
// }
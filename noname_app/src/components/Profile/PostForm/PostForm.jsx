import {Field, reduxForm} from "redux-form";



const PostForm = (props)=>{
    return  (
        <form onSubmit={props.handleSubmit}>
            <Field name='post' component='textarea' placeholder='Typing...'/>
            <button>Post</button>
        </form>
    )
}

export const FormContact = reduxForm({form:'post'})(PostForm)


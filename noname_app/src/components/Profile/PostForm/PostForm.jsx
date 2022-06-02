import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../common /validators/validators";
import Textarea from "../../common /FormControls /FormControls";




const PostForm = ({handleSubmit, valid})=>{
    const maxLength50 = maxLength(50)
    return  (
        <form onSubmit={handleSubmit}>
            <Field name='post' component={Textarea} placeholder='Typing...' validate={[required,maxLength50]}/>
            <button disabled={!valid}>Post</button>
        </form>
    )
}

export const FormContact = reduxForm({form:'post'})(PostForm)


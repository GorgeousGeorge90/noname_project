import ava from '../../../assets/img /ava.png'
import styles from './Post.module.css';
import {useDispatch} from "react-redux";
import {deleteOldPost} from "../../../redux/profileReducer";



const Posts = (props) => {
    const id = props.post.id
    const dispatch = useDispatch()

    const deletePost = ()=>{
        dispatch(deleteOldPost(id))
    }

    return (
         <div className={styles.content}>
             <div className={styles.avatar}>
                 <img src={ava}/>
             </div>
             <div className={styles.post}>
                 <span onDoubleClick={deletePost}>X</span>
                 <p>{props.post.text}</p>
             </div>
        </div>
    )
}

export default Posts
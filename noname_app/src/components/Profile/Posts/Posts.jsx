import ava from '../../../assets/img /ava.png'
import styles from './Posts.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {deleteOldPost} from '../../../redux/profileReducer';



const Posts = () => {
    const posts = useSelector(state => state.profilePage.posts)
    const noPost = useSelector(state=>state.profilePage.noPost)
    const dispatch = useDispatch()

    const deletePost = (id) => {
        dispatch(deleteOldPost(id))
    }

    if (noPost || posts.length === 0 ) {
        return (
            <div className={styles.reserved}>
                No posts yet!
            </div>
        )
    } else {
        return (
            <ul className={styles.main}>
                {posts.map(post =>
                    <li className={styles.content} key={post.id}>
                        <div className={styles.avatar}>
                            <img src={ava}/>
                        </div>
                        <div className={styles.post}>
                            <span onDoubleClick={() => deletePost(post.id)}>X</span>
                            <p>{post.text}</p>
                        </div>
                    </li>
                )}
            </ul>
        )
    }
}

export default Posts
import {useDispatch} from 'react-redux';
import ava from '../../assets/img /ava.png';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import {FormContact} from './PostForm/PostForm';
import StatusFrom from '../common /StatusForm/StatusFrom';
import {useEffect} from 'react';
import {addNewPost, fastFetchPosts} from '../../redux/profileReducer';




const Profile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fastFetchPosts())
    }, [])

    const addPost = (values)=>{
        let text = values.post
        dispatch(addNewPost(text))
    }


    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <img src={ava} alt="logo"/>
                <div className={styles.description}>
                    <div className={styles.about}>
                        <p> Name: Egor</p>
                        <p> Job: React Developer</p>
                        <p> City: Moscow</p>
                    </div>
                    <StatusFrom/>
                </div>
            </div>
            <div className={styles.content}>
                <Posts/>
                <FormContact onSubmit={addPost}/>
            </div>
        </div>
    )
}


export default Profile


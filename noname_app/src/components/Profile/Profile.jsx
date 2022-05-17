import {useDispatch, } from 'react-redux';
import {addPost} from '../../redux/profileReducer';
import ava from '../../assets/img /ava.jpeg';
import styles from './Profile.module.css';
import Posts from "./Post/Post";
import {FormContact} from "./PostForm/PostForm";


const Profile = () => {
    const dispatch = useDispatch();

    const addPostTest = (values)=>{
       dispatch(addPost(values.post))
    }
    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <img src={ava} alt="logo"/>
                <p> My name is Egor!</p>
                <p> I am React Developer!</p>
            </div>
            <div className={styles.content}>
                <Posts/>
                <FormContact onSubmit={addPostTest}/>
            </div>
        </div>
    )
}


export default Profile


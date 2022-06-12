import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchPosts} from '../../redux/newsReduser';
import styles from './News.module.css'
import {useTheme} from '../common /Hooks/useTheme';


const News = ()=> {
    const {theme,setTheme} = useTheme()
    const posts = useSelector(state=>state.newsPage.posts)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts())
    },[])

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                Here is the news!
            </div>
            <div className={styles.content}>
                {posts.map(post => <p>{post.body}</p>)}
            </div>
        </div>
    )
}

export default News
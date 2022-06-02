import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "../../redux/newsReduser";


const News = ()=> {
    const posts = useSelector(state=>state.newsPage.posts)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts())
    },[])

    return (
        <div>
            Here is the news!
            {posts.map(post=><p>{post.body}</p>)}
        </div>
    )
}

export default News
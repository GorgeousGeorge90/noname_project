import {useSelector} from "react-redux";


const Posts = (props)=>{
    const posts = useSelector(state=>state.profilePage.posts)
    return (
        <div>
        {posts.map(post => <p> {post.text}</p>)}
        </div>
    )
}

export default Posts
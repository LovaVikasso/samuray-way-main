import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddTextForm} from "../../common/AddTextForm";
import {AddTextHookForm} from "../../forms/AddTextHookForm";

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const addNewPost = (text: string) => {
        props.addPost(text)
    }
    return (
        <div className={s.postsBlock}>
            {/*<AddTextForm onClick={addNewPost}/>*/}
            <div className={s.newPost}>
                <AddTextHookForm onClick={addNewPost}/>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts
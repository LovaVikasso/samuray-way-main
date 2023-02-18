import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const onNewTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewTextCallBack(e.currentTarget.value)
    }
    const addNewPost = () => {
        props.addPostCallBack()
    }
    const newPostMessage = props.newPostMessage
    return (
        <div className={s.postsBlock}>
            <div className={s.postBlock}>New post</div>
            <div className={s.postBlock}><textarea onChange={onNewTextChangeHandler} value={newPostMessage}
                                                   placeholder="Напиши сюда текст нового поста"/></div>
            <div className={s.postBlock}>
                <button onClick={addNewPost}>Add post</button>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts
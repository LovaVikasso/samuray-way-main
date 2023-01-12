import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

const MyPosts = (props: ProfilePageType) => {

    let postElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();//потказываем типизации что мы используем createRef для textarea
    let addNewPost = () => {
        alert(newPostElement.current?.value) //current?.value если ссылка (ref) существует, то value
    }
    return (
        <div className={s.postsBlock}>
            <div className={s.postBlock}>New post</div>
            <div className={s.postBlock}><textarea ref={newPostElement}></textarea></div>
            <div className={s.postBlock}>
                <button onClick={addNewPost}>Add post</button>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts
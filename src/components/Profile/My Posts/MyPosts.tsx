import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { ProfilePageType} from "../../../redux/state";

const MyPosts = (props: ProfilePageType) => {

    let postElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <div className={s.postBlock}>New post</div>
            <div className={s.postBlock}><textarea></textarea></div>
            <div className={s.postBlock}>
                <button>Add post</button>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts
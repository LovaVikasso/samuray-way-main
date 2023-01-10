import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = () => {
    let posts = [
        {id:1, message:'Hi', likesCount:1},
        {id:2, message:'Hello', likesCount:1},
        {id:3, message:'Nice to see you again', likesCount:10},
        {id:4, message:'YO', likesCount:7},

    ]
    let postElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
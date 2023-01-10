import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = () => {
    let postData = [
        {id:1, message:'Hi', likesCount:1},
        {id:2, message:'Hello', likesCount:1},
        {id:3, message:'Nice to see you again', likesCount:10}
    ]
    return (
        <div className={s.postsBlock}>
            <div className={s.postBlock}>New post</div>
            <div className={s.postBlock}><textarea></textarea></div>

            <div className={s.postBlock}>
                <button>Add post</button>
            </div>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
        </div>
    )
}
export default MyPosts
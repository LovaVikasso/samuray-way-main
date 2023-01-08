import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
            <div>
                <div>New post</div>
                <textarea></textarea>
                <button>Add post</button>
                   <Post message='Hi' likesCount={1}/>
                   <Post message='Hello' likesCount={7}/>
            </div>
    )
}
export default MyPosts
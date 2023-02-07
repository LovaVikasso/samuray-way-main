import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type MyPostPropsType = {
    posts:Array<PostType>
    addPost:(postMessage:string)=>void
}
//const MyPosts = (props: ProfilePageType) => { старая типизация
const MyPosts:React.FC<MyPostPropsType> = (props) => {

    let postElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();//показываем типизации что мы используем createRef для textarea
    let addNewPost = () => {
        if (newPostElement.current) {
       props.addPost(newPostElement.current.value)
        } //если ссылка (ref) существует, то value
    }
    return (
        <div className={s.postsBlock}>
            {/*{props.addPost("Hello again from MyPosts.Props")} проверяю что все дошло как надо*/}
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
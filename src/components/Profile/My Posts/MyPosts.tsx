import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, TsarType} from "../../../redux/store";
import post from "./Post/Post";

type MyPostPropsType = {
    posts: Array<PostType>
    message: string
    // addPost: (postMessage: string) => void
    // changeNewTextCallBack: (newText: string) => void
    dispatch: (action: TsarType) => void
}
//const MyPosts = (props: ProfilePageType) => { старая типизация


const MyPosts: React.FC<MyPostPropsType> = (props) => {

    let postElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    //let newPostElement = React.createRef<HTMLTextAreaElement>();//показываем типизации что мы используем createRef для textarea
    let addNewPost = () => {
        props.dispatch({type:'ADD-POST', postMessage:props.message})
        // props.addPost(props.message)
        // if (newPostElement.current) {
        //     props.addPost(newPostElement.current.value)
        // } //если ссылка (ref) существует, то value
    }

    const onNewTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
     props.dispatch({type:'UPDATE-NEW-POST-TEXT', message:e.currentTarget.value})
        // props.changeNewTextCallBack(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            <div className={s.postBlock}>New post</div>
            <div className={s.postBlock}><textarea onChange={onNewTextChangeHandler} value={props.message} placeholder="Напиши сюда текст нового поста"/></div>
            <div className={s.postBlock}>
                <button onClick={addNewPost}>Add post</button>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts
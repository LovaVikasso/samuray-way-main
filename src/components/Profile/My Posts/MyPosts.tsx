import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
// type MyPostPropsType = {
//     state: ProfilePageType
//    // dispatch: (action: TsarType) => void
//     onNewTextCallBack: (message:string)=>void
//     addPostCallBack: ()=>void
//     //newPostMessage:string
// }

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    // let addNewPost = () => {
    //     props.dispatch(AddPostAC(props.message))
    // }
    // const onNewTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    //  props.dispatch(UpdateNewPostAC(e.currentTarget.value))
    // }
    const onNewTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.onNewTextCallBack(e.currentTarget.value)
        //console.log(props.newPostMessage)
    }
    const addNewPost = ()=>{
        //console.log(props.state)
        props.addPostCallBack()
    }

    const newPostMessage = props.newPostMessage
    return (
        <div className={s.postsBlock}>
            <div className={s.postBlock}>New post</div>
            <div className={s.postBlock}><textarea onChange={onNewTextChangeHandler} value={newPostMessage} placeholder="Напиши сюда текст нового поста"/></div>
            <div className={s.postBlock}>
                <button onClick={addNewPost}>Add post</button>
            </div>
            {postElement}
        </div>
    )
}
export default MyPosts
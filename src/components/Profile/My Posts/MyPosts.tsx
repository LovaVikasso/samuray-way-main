import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/myStore";
type MyPostPropsType = {
    state: ProfilePageType
   // dispatch: (action: TsarType) => void
    onNewTextCallBack: (newText:string)=>void
    addPostCallBack: ()=>void

}

const MyPosts: React.FC<MyPostPropsType> = (props) => {
    let postElement = props.state.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    // let addNewPost = () => {
    //     props.dispatch(AddPostAC(props.message))
    // }
    // const onNewTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    //  props.dispatch(UpdateNewPostAC(e.currentTarget.value))
    // }
    const onNewTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.onNewTextCallBack(e.currentTarget.value)
    }
    const addNewPost = ()=>{
        props.addPostCallBack()
    }
    const newPostMessage = props.state.newPostMessage
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
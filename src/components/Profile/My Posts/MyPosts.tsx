import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {AddPostAC, PostType, TsarType, UpdateNewPostAC} from "../../../redux/myStore";


type MyPostPropsType = {
    posts: Array<PostType>
    message: string
   // dispatch: (action: TsarType) => void
    onNewTextCallBack: (newText:string)=>void
    addPostCallBack: ()=>void

}

const MyPosts: React.FC<MyPostPropsType> = (props) => {
    let postElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
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
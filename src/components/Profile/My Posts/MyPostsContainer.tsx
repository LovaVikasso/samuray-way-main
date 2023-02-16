import React from "react";
import {AddPostAC, PostType, TsarType, UpdateNewPostAC} from "../../../redux/myStore";
import MyPosts from "./MyPosts";


type MyPostPropsType = {
    posts: Array<PostType>
    message: string
    dispatch: (action: TsarType) => void
}

const MyPostsContainer: React.FC<MyPostPropsType> = (props) => {
    let addNewPost = () => {
        props.dispatch(AddPostAC(props.message))
    }
    const onNewTextChangeHandler = (newText:string) => {
     props.dispatch(UpdateNewPostAC(newText))
    }
    return <MyPosts posts={props.posts} message={props.message} onNewTextCallBack={onNewTextChangeHandler} addPostCallBack={addNewPost} />
}
export default MyPostsContainer
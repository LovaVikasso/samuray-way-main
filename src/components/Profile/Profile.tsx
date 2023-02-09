import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, TsarType} from "../../redux/state";

type ProfilePropsType = {
    posts:Array<PostType>
    message:string
    dispatch: (action: TsarType) => void
    // addPost:(postMessage:string)=>void
    // updateNewPostText:(newText:string)=>void
}
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (

        <div className={s.content}>
            <ProfileInfo />
            {/*<MyPosts posts={props.posts} addPost={props.addPost} message={props.message} changeNewTextCallBack={props.updateNewPostText}/>*/}
            <MyPosts posts={props.posts} message={props.message} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile
import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    posts:Array<PostType>
    addPost:(postMessage:string)=>void
    message:string
    updateNewPostText:(newText:string)=>void
}
//const Profile = (props:ProfilePageType) => { старая типизация
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (

        <div className={s.content}>
            {/*{props.addPost("Hello again from Profile.Props")} проверяю что все дошло как надо*/}
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} message={props.message} changeNewTextCallBack={props.updateNewPostText}/>
        </div>
    )
}
export default Profile
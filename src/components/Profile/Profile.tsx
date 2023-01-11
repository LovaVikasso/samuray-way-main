import React from "react";
import s from './Profile.module.css'
import MyPosts, {PostsType} from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfileType = {
    posts: Array<PostsType>
}
const Profile = (props:ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}
export default Profile
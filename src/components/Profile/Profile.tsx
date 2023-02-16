import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, TsarType} from "../../redux/myStore";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import {store} from "../../redux/redux-store";

type ProfilePropsType = {
    // posts:Array<PostType>
    // message:string
    // dispatch: (action: TsarType) => void
}
const Profile= () => {

    return (

        <div className={s.content}>
            <ProfileInfo />
            <MyPostsContainer state={store.getState().profilePage}/>
        </div>
    )
}
export default Profile
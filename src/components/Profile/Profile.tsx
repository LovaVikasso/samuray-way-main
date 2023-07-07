import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import {ProfileUserType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileUserType | null,
    status: string,
    UpdateStatus: (status:string) => void
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} UpdateStatus={props.UpdateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile
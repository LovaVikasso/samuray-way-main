import React, { FC } from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import {ProfileUserType} from "../../redux/reducers/profile-reducer";

type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileUserType | null,
    status: string,
    UpdateStatus: (status:string) => void
    UploadPhoto: (file:File) => void
}
const Profile:FC<ProfilePropsType> = ({isOwner, profile, status, UpdateStatus, UploadPhoto}) => {

    return (
        <div className={s.content}>
            <ProfileInfo UploadPhoto={UploadPhoto} isOwner={isOwner} profile={profile} status={status} UpdateStatus={UpdateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile
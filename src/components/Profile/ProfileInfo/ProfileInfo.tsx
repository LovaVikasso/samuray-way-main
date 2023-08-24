import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileUserType} from "../../../redux/reducers/profile-reducer";
import {ProfileError} from "./ProfileError";
import { ProfileStatus } from "../ProfileStatus";


type ProfilePropsType = {
    profile: ProfileUserType | null,
    status: string,
    UpdateStatus: (status:string) => void
}
const ProfileInfo = (props: ProfilePropsType) => {
    // console.log('ProfileInfo'+props.status)
    if (!props.profile) {
        return <ProfileError/>

    } else return (
        <div className={s.descriptionBlock}>
            <img src={props.profile?.photos.small} alt={'Avatar'}/>
            <h3>{props.profile.fullName}</h3>
            <ProfileStatus status={props.status}
            UpdateStatus={props.UpdateStatus}/>
            {props.profile?.aboutMe}

        </div>
    )
}
export default ProfileInfo
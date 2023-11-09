import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {ProfileUserType} from "../../../redux/reducers/profile-reducer";
import {ProfileError} from "./ProfileError";
import {ProfileStatus} from "../ProfileStatus";
import userWithOutAvatar from "../../../assets/images/userWithOutAvatar.png";


type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileUserType | null,
    status: string,
    UpdateStatus: (status: string) => void
    UploadPhoto: (photo: File) => void
}

const ProfileInfo = (props: ProfilePropsType) => {
    const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.UploadPhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <ProfileError/>

    } else return (
        <div className={s.descriptionBlock}>
            <img src={props.profile?.photos.small || userWithOutAvatar} alt={'Avatar'}/>
            {props.isOwner == true && (
                <label className={s.customFileUpload}>
                    <input type='file' accept='image/*' onChange={uploadPhoto} />
                    Выбрать фото
                </label>
            )}
            <h3>{props.profile.fullName}</h3>
            <ProfileStatus status={props.status}
                           UpdateStatus={props.UpdateStatus}/>
            {props.profile?.aboutMe}
        </div>
    )
}
export default ProfileInfo
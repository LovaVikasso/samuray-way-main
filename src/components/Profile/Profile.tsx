import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
    return (
        <div className = {s.content}>
            <img src = "https://img.freepik.com/free-photo/pretty-wedding-flowers-close-up-view-background_24972-65.jpg?w=1800&t=st=1670238379~exp=1670238979~hmac=cb9ecc0f89264544bc6625abdfc7c4bc45f1c2790860ce74bbfbadb507855137"  alt={''}/>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile
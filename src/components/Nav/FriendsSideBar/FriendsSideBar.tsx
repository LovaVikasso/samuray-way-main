import React from "react";
import s from './Friends.module.css'
import Friend from "./Friend";

const FriendsSideBar = () => {
     return (
        <div className={s.friendSideBar}>
            <Friend />
            <Friend />
            <Friend />
        </div>
    )
}

export default FriendsSideBar
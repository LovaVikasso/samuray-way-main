import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import axios from "axios";
import userWithOutAvatar from '../../assets/images/userWithOutAvatar.png'

export const Users: React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.SetUsersCallBack(response.data.items)
            })
    }
    // if (props.users.length===0){props.SetUsersCallBack([
    //     {
    //         id: 1,
    //         avatar: "https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png",
    //         name: 'Victoria',
    //         followed: true,
    //         status: 'At work',
    //         location: {country: 'Russia', city: 'Novorossiysk'}
    //     },
    //     {
    //         id: 2,
    //         avatar: "https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png",
    //         name: 'Anna',
    //         followed: true,
    //         status: 'Some status',
    //         location: {country: 'Russia', city: 'Novorossiysk'}
    //     },
    //     {
    //         id: 3,
    //         avatar: "https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png",
    //         name: 'Maria',
    //         followed: true,
    //         status: 'At work',
    //         location: {country: 'Turkey', city: 'Mersin'}
    //     },
    //     {
    //         id: 4,
    //         avatar: "https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png",
    //         name: 'Chris',
    //         followed: false,
    //         status: 'Chilling',
    //         location: {country: 'USA', city: 'New York'}
    //     },
    //     {
    //         id: 5,
    //         avatar: "https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png",
    //         name: 'John',
    //         followed: false,
    //         status: '',
    //         location: {country: 'USA', city: 'Los Angeles'}
    //     },
    // ])}
    return (

        <div>
            {props.users.map((user) => <div key={user.id}>
                <span>
                    <div className={s.avatar}>
                        <img src={user.photos.small != null ? user.photos.small : userWithOutAvatar}
                             alt={""}/>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                props.UnfollowCallBack(user.id)
                            }}>Unfollow </button>
                            : <button onClick={() => {
                                props.FollowCallBack(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    {/*<div>{user.location.city}</div>*/}
                    {/*<div>{user.location.country}</div>*/}
                </span>

            </div>)}
        </div>
    );
};


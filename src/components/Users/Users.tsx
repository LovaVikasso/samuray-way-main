import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";

export const Users: React.FC<UsersPropsType> = (props) => {
    return (

        <div>

            {props.users.map((user) => <div key={user.id}>
                <span>
                    <div className={s.avatar}>
                        <img src={user.avatar}
                             alt={""}/>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {props.UnfollowCallBack(user.id)}}>Unfollow </button>
                            : <button onClick={() => {props.FollowCallBack(user.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                </span>

            </div>)}
        </div>
    );
};


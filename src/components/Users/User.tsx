import React from 'react';
import s from './User.module.css'
import { NavLink } from 'react-router-dom';
import { UserType } from '../../redux/reducers/users-reducer';
import userWithOutAvatar from "../../assets/images/userWithOutAvatar.png";

type UserPropsType = {
    user: UserType
    UnFollowTC: (id: number) => void
    FollowTC: (id: number) => void
    followingInProgress: Array<number>
}
export const User:React.FC<UserPropsType> = ({user,  UnFollowTC, FollowTC, followingInProgress}) => {
    return (
        <div key={user.id}>
                <span>
                    <div className={s.avatar}>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userWithOutAvatar}
                             alt={""}/>
                        </NavLink>

                    </div>
                    <div className={s.follow}>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() =>
                                UnFollowTC(user.id)
                            }>Unfollow </button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                FollowTC(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
            <span>
                        <div className={s.name}>{user.name}</div>
                        <div>{user.status}</div>
                </span>

        </div>
    );
}
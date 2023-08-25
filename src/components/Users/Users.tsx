import React from 'react';
import s from "./Users.module.css";
import userWithOutAvatar from "../../assets/images/userWithOutAvatar.png";
import { UserType} from "../../redux/reducers/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from '../Paginator/Paginator';
import { User } from './User';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangePage: (page: number) => void
    users: UserType[]
    UnFollowTC: (id: number) => void
    FollowTC: (id: number) => void
    followingInProgress: Array<number>
}


export const Users: React.FC<PropsType> = ({
    totalUsersCount, pageSize, currentPage, users,
    UnFollowTC,
    FollowTC,
    onChangePage,
    followingInProgress})  => {

    return <div className={s.users}>
        {users.map((user) => <User key={user.id} user={user} FollowTC={FollowTC} UnFollowTC={UnFollowTC} followingInProgress={followingInProgress}/>)}
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onChangePage={onChangePage}/>
             </div>
}

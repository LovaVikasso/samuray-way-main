import React from 'react';
import s from "./Users.module.css";
import userWithOutAvatar from "../../assets/images/userWithOutAvatar.png";
import { UserType} from "../../redux/reducers/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from '../Paginator/Paginator';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    UnFollowTC: (id: number) => void
    FollowTC: (id: number) => void
    onChangePage: (page: number) => void
    followingInProgress: Array<number>
}


export const Users: React.FC<PropsType> = ({
    totalUsersCount, pageSize, currentPage, users,
    UnFollowTC,
    FollowTC,
    onChangePage,
    followingInProgress})  => {

    return <div className={s.users}>
        {
            users.map((user) => <div key={user.id}>
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

            </div>)}
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onChangePage={onChangePage}/>
        {/*<div className={s.pages}>*/}
        {/*    {pages.map(page => <span*/}
        {/*        key={page}*/}
        {/*        onClick={() => props.onChangePage(page)}*/}
        {/*        className={props.currentPage === page ? s.selectedPage : ''}> {page} </span>)}*/}
        {/*</div>*/}
    </div>

}

import React from 'react';
import s from "./Users.module.css";
import userWithOutAvatar from "../../assets/images/userWithOutAvatar.png";
import {FollowTC, UnFollowUserTC, UserType} from "../../redux/reducers/users-reducer";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../redux/redux-store";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    Unfollow: (id: number) => void
    Follow: (id: number) => void
    onChangePage: (page: number) => void
    toggleInProgress: (onProgress: boolean, userId: number) => void
    followingInProgress: Array<number>
}


export const Users: React.FC<PropsType> = (props) => {
    const dispatch = useAppDispatch()

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.users}>
        {
            props.users.map((user) => <div key={user.id}>
                <span>
                    <div className={s.avatar}>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userWithOutAvatar}
                             alt={""}/>
                        </NavLink>

                    </div>
                    <div className={s.follow}>
                        {user.followed ?
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={()=>
                                dispatch(UnFollowUserTC(user.id))
                                // <button disabled={props.followingInProgress.some(id=>id==u.id)} onClick={() => {
                                // props.toggleInProgress(true, user.id)
                                // API.followUser(user.id)
                                //     .then(response => {
                                //         if (response.resultCode == 0) {
                                //             props.Unfollow(user.id)
                                //         }
                                //         props.toggleInProgress(false, user.id)
                                //     })


                            }>Unfollow </button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                dispatch(FollowTC(user.id))
                                // props.toggleInProgress(true, user.id)
                                // API.unfollowUser(user.id)
                                //     .then(response => {
                                //         if (response.resultCode == 0) {
                                //             props.Follow(user.id)
                                //         }
                                //         props.toggleInProgress(false, user.id)
                                //     })

                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                        <div className={s.name}>{user.name}</div>
                        <div>{user.status}</div>
                </span>

            </div>)}
        <div className={s.pages}>
            {pages.map(page => <span
                key={page}
                onClick={() => props.onChangePage(page)}
                className={props.currentPage === page ? s.selectedPage : ''}> {page} </span>)}
        </div>
    </div>

}

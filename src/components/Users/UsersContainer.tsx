import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {FollowAC, SetUsersAC, UnFollowAC, UsersPageType, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";

type MapStatePropsType = UsersPageType
type MapDispatchPropsType = {
    FollowCallBack: (id:number) => void
    UnfollowCallBack: (id:number) => void
    SetUsersCallBack: (users: UserType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        users:state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
       FollowCallBack: (id) => {
            dispatch(FollowAC(id));
        },
        UnfollowCallBack: (id) => {
            dispatch(UnFollowAC(id))
        },
        SetUsersCallBack: (users) => {
           dispatch(SetUsersAC(users))
    }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer
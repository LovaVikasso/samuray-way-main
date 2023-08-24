import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {
    Follow, GetUsersTC,
    ToddleFollowingInProgress,
    UnFollow,
    UsersPageType
} from "../../redux/reducers/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {compose} from "redux";



type MapStatePropsType = UsersPageType
type MapDispatchPropsType = {
    Follow: (id: number) => void
    UnFollow: (id: number) => void
    // SetUsers: (users: UserType[]) => void
    // SetCurrentPage: (currentPage: number) => void
    // SetTotalCount: (totalCount: number) => void
    // ToddleIsFetching: (isFetching: boolean) => void
    ToddleFollowingInProgress: (inProgress: boolean, userId: number) => void
    GetUsersTC: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        // this.props.ToddleIsFetching(true)
        // API.getUsers(this.props.currentPage,this.props.pageSize)
        //     .then(response => {
        //         this.props.SetUsers(response.items)
        //         this.props.ToddleIsFetching(false)
        //         this.props.SetTotalCount(response.totalCount)
        //     })
        this.props.GetUsersTC(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (page: number) => {
        this.props.GetUsersTC(page, this.props.pageSize)
        // this.props.SetCurrentPage(page)
        // this.props.ToddleIsFetching(true)
        // API.getUsers(page, this.props.pageSize)
        //     .then(response => {
        //         this.props.SetUsers(response.items)
        //         this.props.SetTotalCount(response.totalCount)
        //         this.props.ToddleIsFetching(false)
        //     })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           users={this.props.users}
                                                           Unfollow={this.props.UnFollow}
                                                           Follow={this.props.Follow}
                                                           onChangePage={this.onPageChanged} //
                                                           toggleInProgress={this.props.ToddleFollowingInProgress}
                                                           followingInProgress={this.props.followingInProgress}
            />}
        </>
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         Follow: (id) => {dispatch(Follow(id))},
//         Unfollow: (id) => {dispatch(UnFollow(id))},
//         SetUsers: (users) => {dispatch(SetUsers(users))},
//         SetCurrenPage: (currentPage: number) => {dispatch(SetCurrentPage(currentPage))},
//         SetTotalCount: (totalCount: number) => {dispatch(SetTotalCount(totalCount))},
//         ToddleIsFetching: (isFetching: boolean) => {dispatch(ToddleIsFetching(isFetching))},
//         ToddleFollowingInProgress: (inProgress:boolean, userId:number) => {dispatch(ToddleFollowingInProgress(inProgress, userId))},
//         GetUsersTC: (currentPage: number, pageSize: number) => GetUsersTC(currentPage, pageSize)
//         }
//     }


// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default compose<ComponentType>(connect(mapStateToProps, {
    Follow,
    UnFollow,
    // SetUsers,
    // SetCurrentPage,
    // SetTotalCount,
    // ToddleIsFetching,
    ToddleFollowingInProgress,
    GetUsersTC
}))(UsersContainer); //типизация и action должны не отличаться по имени




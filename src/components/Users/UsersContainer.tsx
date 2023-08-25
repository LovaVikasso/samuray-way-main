import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {
    FollowTC, GetUsersTC,
    UnFollowTC,
    UsersPageType
} from "../../redux/reducers/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {compose} from "redux";
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/selectors/users-selector';



type MapStatePropsType = UsersPageType
type MapDispatchPropsType = {
    FollowTC: (id: number) => void
    UnFollowTC: (id: number) => void
    // ToddleIsFetching: (isFetching: boolean) => void

    GetUsersTC: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {

        this.props.GetUsersTC(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (page: number) => {
        this.props.GetUsersTC(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           users={this.props.users}
                                                           UnFollowTC={this.props.UnFollowTC}
                                                           FollowTC={this.props.FollowTC}
                                                           onChangePage={this.onPageChanged} //
                                                           followingInProgress={this.props.followingInProgress}
                                                           />}
        </>
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default compose<ComponentType>(connect(mapStateToProps, {
    FollowTC,
    UnFollowTC,
    // SetUsers,
    // SetCurrentPage,
    // SetTotalCount,
    // ToddleIsFetching,
    GetUsersTC
}))(UsersContainer); //типизация и action должны не отличаться по имени




//types
import {userAPI} from "../api/api";
import {Dispatch} from "redux";

export type UserType = {
    id: number,
    uniqueUrlName: null,
    name: string,
    followed: boolean
    status: string | null
    photos: { small: string | undefined, large: string | undefined }
}
export type UsersPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

type FollowActionType = ReturnType<typeof Follow>
type UnFollowActionType = ReturnType<typeof UnFollow>
type SetUsersActionType = ReturnType<typeof SetUsers>
type SetCurrentPageACType = ReturnType<typeof SetCurrentPage>
type SetTotalCountACType = ReturnType<typeof SetTotalCount>
type ToddleIsFetchingACType = ReturnType<typeof ToddleIsFetching>
type ToddleFollowingInProgressACType = ReturnType<typeof ToddleFollowingInProgress>

type UsersReducerType =
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageACType
    | SetTotalCountACType
    | ToddleIsFetchingACType
    | ToddleFollowingInProgressACType

export type ThunkDispatch = Dispatch<UsersReducerType>

const initialState: UsersPageType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 25,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: true};
                    }
                    return user
                })
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: false};
                    }
                    return user
                })
            }
        }
        case "TODDLE-FOLLOWING-IN-PROGRESS ": {
            //
            return {
                ...state, followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case 'SET-USERS' : {
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE' : {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TODDLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}
export const Follow = (id: number) => ({type: 'FOLLOW', id} as const)
export const UnFollow = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const SetUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const SetCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const SetTotalCount = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', totalCount} as const)
export const ToddleIsFetching = (isFetching: boolean) => ({type: 'TODDLE-IS-FETCHING', isFetching} as const)
export const ToddleFollowingInProgress = (inProgress: boolean, userId: number) => ({
    type: 'TODDLE-FOLLOWING-IN-PROGRESS ',
    inProgress,
    userId
} as const)
export const GetUsersTC = (currentPage: number, pageSize: number) => (dispatch: ThunkDispatch) => {
    dispatch(ToddleIsFetching(true))
    userAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(SetUsers(response.items))
            dispatch(SetTotalCount(response.totalCount))
            dispatch(SetCurrentPage(currentPage))
            dispatch(ToddleIsFetching(false))
        })
}

export const FollowTC = (userId: number) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(ToddleFollowingInProgress(true, userId))
        userAPI.followUser(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(Follow(userId))
                }
                dispatch(ToddleFollowingInProgress(false, userId))
            })
    }
}

export const UnFollowUserTC = (userId: number) => (dispatch: Dispatch<UsersReducerType>) => {
    dispatch(ToddleFollowingInProgress(true, userId))
    userAPI.unfollowUser(userId)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(UnFollow(userId))
            }
            dispatch(ToddleFollowingInProgress(false, userId))
        })
}



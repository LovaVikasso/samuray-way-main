import {Dispatch} from "redux";
import {userAPI} from "../../api/userAPI";

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
type ChangePageSizeACType = ReturnType<typeof ChangePageSize>

type UsersReducerType =
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageACType
    | SetTotalCountACType
    | ToddleIsFetchingACType
    | ToddleFollowingInProgressACType
    | ChangePageSizeACType

export type ThunkDispatch = Dispatch<UsersReducerType>

const initialState: UsersPageType = {
    users: [],
    pageSize: 40,
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
        case "CHANGE-PAGE-SIZE": {
            return {
            ...state, pageSize: action.pageSize
            }
        }
        default:
            return state
    }
}

export const ChangePageSize = (pageSize: number) => ({type: 'CHANGE-PAGE-SIZE', pageSize} as const)
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
export const GetUsersTC = (currentPage: number, pageSize: number) => async (dispatch: ThunkDispatch) => {
    dispatch(ToddleIsFetching(true))
    const response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(SetUsers(response.items));
    dispatch(SetTotalCount(response.totalCount));
    dispatch(SetCurrentPage(currentPage));
    dispatch(ToddleIsFetching(false));
}

export const FollowTC = (userId: number) => {
    return async (dispatch: ThunkDispatch) => {
        const apiMethod = userAPI.followUser.bind(userAPI)
        const actionCreator = Follow
        dispatch(ToddleFollowingInProgress(true, userId))
        const response = await apiMethod(userId);
        if (response.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(ToddleFollowingInProgress(false, userId));
    }
}

export const UnFollowTC = (userId: number) => async (dispatch: Dispatch<UsersReducerType>) => {
    const apiMethod = userAPI.unfollowUser.bind(userAPI)
    const actionCreator = UnFollow
    dispatch(ToddleFollowingInProgress(true, userId))
    const response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(ToddleFollowingInProgress(false, userId));
}

// const followUnfollowToddle = async (dispatch: Dispatch<UsersReducerType>, userId:number, apiMethod: Function, actionCreator: Function) => {
//     dispatch(ToddleFollowingInProgress(true, userId))
//     const response = await apiMethod(userId);
//     if (response.resultCode === 0) {
//         dispatch(actionCreator(userId));
//     }
//     dispatch(ToddleFollowingInProgress(false, userId));
// }

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
    id: number,
    uniqueUrlName: null,
    name: string,
    followed: boolean
    status: string | null
    photos: { small: string | undefined, large: string | undefined}
    //location: { country: string, city: string }
}
export type UsersPageType = {
    users: Array<UserType>
}
const initialState: UsersPageType = {
    users: []
        //[
    //     {
    //         id: 1,
    //         avatar: "https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png",
    //         name: 'Victoria',
    //         followed: true,
    //         status: 'At work',
    //         location: {country: 'Russia', city: 'Novorossiysk'}
    //     },
    //     {
    //         id: 2,
    //         avatar: "https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png",
    //         name: 'Anna',
    //         followed: true,
    //         status: 'Some status',
    //         location: {country: 'Russia', city: 'Novorossiysk'}
    //     },
    //     {
    //         id: 3,
    //         avatar: "https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png",
    //         name: 'Maria',
    //         followed: true,
    //         status: 'At work',
    //         location: {country: 'Turkey', city: 'Mersin'}
    //     },
    //     {
    //         id: 4,
    //         avatar: "https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png",
    //         name: 'Chris',
    //         followed: false,
    //         status: 'Chilling',
    //         location: {country: 'USA', city: 'New York'}
    //     },
    //     {
    //         id: 5,
    //         avatar: "https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png",
    //         name: 'John',
    //         followed: false,
    //         status: '',
    //         location: {country: 'USA', city: 'Los Angeles'}
    //     },
    // ]
}
type FollowActionType = ReturnType<typeof FollowAC>
type UnFollowActionType = ReturnType<typeof UnFollowAC>
type SetUsersActionType = ReturnType<typeof SetUsersAC>

type UsersReducerType = FollowActionType | UnFollowActionType | SetUsersActionType

export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerType): UsersPageType => {
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                // users: state.users.map((user)=>{user.id===action.id ? return{...user, followed: true} :  return user}) не пойму почему не работает
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: true};
                    }
                    return user
                })
            }
        }

        case UNFOLLOW : {
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
        case SET_USERS : {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}
export const FollowAC = (id: number) => {
    return {
        type: FOLLOW,
        id
    } as const
}
export const UnFollowAC = (id: number) => {
    return {
        type: UNFOLLOW,
        id
    } as const
}

export const SetUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}


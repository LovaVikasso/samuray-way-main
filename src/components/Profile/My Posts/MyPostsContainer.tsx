import React from "react";
import MyPosts from "./MyPosts";
import {AddPostAC, ProfilePageType, UpdateNewPostAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


// type MyPostPropsType = {
//     // posts: Array<PostType>
//     // message: string
//     // dispatch: (action: TsarType) => void
// }

// const MyPostsContainer= () => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 {
//                     let addNewPost = () => {
//                         // store.dispatch(AddPostAC(props.message))
//                         store.dispatch(AddPostAC())
//                     }
//                     const onNewTextChangeHandler = (newText: string) => {
//                         store.dispatch(UpdateNewPostAC(newText))
//                     }
//                     return (
//                         <MyPosts state={store.getState().profilePage}
//                                  onNewTextCallBack={onNewTextChangeHandler}
//                                  addPostCallBack={addNewPost}/>)
//                 }
//             }
//         }
//         </StoreContext.Consumer>)
// }
type MapStatePropsType = ProfilePageType
type MapDispatchPropsType = {
    addPostCallBack: () => void
    onNewTextCallBack: (message: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType):MapStatePropsType=> {
    return {
        posts: state.profilePage.posts,
        newPostMessage:state.profilePage.newPostMessage
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addPostCallBack: () => {
            dispatch(AddPostAC())
        },
        onNewTextCallBack: (message: string) => {
            dispatch(UpdateNewPostAC(message))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
import React from "react";
import MyPosts from "./MyPosts";
import {AddPost, PostType} from "../../../redux/profile-reducer";
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
//                         // store.dispatch(AddPost(props.message))
//                         store.dispatch(AddPost())
//                     }
//                     const onNewTextChangeHandler = (newText: string) => {
//                         store.dispatch(UpdateNewPost(newText))
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
type MapStatePropsType = {
    posts: Array<PostType>
}
type MapDispatchPropsType = {
    addPost: (text:string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (text:string) => {
            dispatch(AddPost(text))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
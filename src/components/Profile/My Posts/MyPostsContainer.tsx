import React from "react";
import MyPosts from "./MyPosts";
import {AddPostAC, UpdateNewPostAC} from "../../../redux/profile-reducer";
import {RootStateType} from "../../../redux/myStore";
import {connect} from "react-redux";


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

const mapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPostCallBack: () => {
            dispatch(AddPostAC())
        },
        onNewTextCallBack: (newText: string) => {
            dispatch(UpdateNewPostAC(newText))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
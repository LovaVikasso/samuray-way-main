import React from "react";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {AddPostAC, UpdateNewPostAC} from "../../../redux/profile-reducer";


// type MyPostPropsType = {
//     // posts: Array<PostType>
//     // message: string
//     // dispatch: (action: TsarType) => void
// }

const MyPostsContainer= () => {
// const MyPostsContainer: React.FC<MyPostPropsType> = (props) => {
// const MyPostsContainer: React.FC<MyPostPropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                {
                    let addNewPost = () => {
                        // store.dispatch(AddPostAC(props.message))
                        store.dispatch(AddPostAC())
                    }
                    const onNewTextChangeHandler = (newText: string) => {
                        store.dispatch(UpdateNewPostAC(newText))
                    }
                    return (
                        <MyPosts posts={store.getState().profilePage.posts}
                                 message={store.getState().profilePage.newPostMessage}
                                 onNewTextCallBack={onNewTextChangeHandler}
                                 addPostCallBack={addNewPost}/>)
                }
            }
        }
        </StoreContext.Consumer>)
}
export default MyPostsContainer
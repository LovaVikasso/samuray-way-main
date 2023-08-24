import {AddPost, ProfilePageType, profileReducer} from "../redux/reducers/profile-reducer"
const startState:ProfilePageType = {
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: "",
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 28820,
        photos: {
            small: "",
            large: ""
        }
    },
    posts: [
        {id: 1, message: 'Hi', likesCount: 1},
        {id: 2, message: 'Hello', likesCount: 1},
        {id: 3, message: 'Nice to see you again', likesCount: 10},
    ],
    status: ''
}
test('new post shold be added', ()=>{
   let state = startState
    let newState = profileReducer(state, AddPost('Hello again'))

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe("Helo again")
})
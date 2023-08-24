import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Header from "./Header";
import {AuthMeType,  LogoutTC} from "../../redux/auth-reducer";

type HeaderPageType = { data: AuthMeType }
type MapStatePropsType = HeaderPageType
type MapDispatchPropsType = {
    LogoutTC: () => void,
}
type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    // componentDidMount() {
    //     this.props.GetAuthTC()
    //     // API.getAuthMe()
    //     //     .then(response => {
    //     //         if (response.resultCode === 0) {
    //     //             this.props.SetUserData(response.data)
    //     //         }
    //     //     })
    // }

    render() {
        return <>
            <Header authData={this.props.data} LogoutTC={this.props.LogoutTC}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        data: state.auth
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         SetAuthUserData: (data: AuthMeType) => {dispatch(SetAuthUserData(data))},
//
//     }
// }

export default connect(mapStateToProps, { LogoutTC})(HeaderContainer);



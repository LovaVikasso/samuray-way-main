import React, {FC} from "react";
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileUserType, SetUserProfileTC, SetUserStatusTC, UpdateStatusTC} from "../../redux/reducers/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/RedirectComponent";


type PathParamsType = { userId: string }
type MapStateToPropsType = {
    profile: ProfileUserType,
    status: string,
    authorizedUserId:null | number,
    isAuth: boolean
}
type MapDispatchToPropsType = {
    SetUserProfileTC: (userId: number) => void,
    SetUserStatusTC: (userId:number) => void,
    UpdateStatusTC: (status:string) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId: number  = Number(this.props.match.params.userId)
        //my id 28820
        if (!userId && this.props.profile) {
            userId = Number(this.props.authorizedUserId)
            if(!this.props.authorizedUserId) {
                this.props.history.push('/login')
                //редирект если нет пользовател обратно на логин
            }
        }
        this.props.SetUserProfileTC(userId)
        this.props.SetUserStatusTC(userId)

        // API.getStatus(28820)
        //     .then(response => console.log(response))
    }

    render() {

        return (
            <div className={s.content}>
                <Profile profile={this.props.profile} status={this.props.status} UpdateStatus={this.props.UpdateStatusTC}/>
                {/*<Profile {...this.props}/>*/}
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         SetUserProfile: (profile) => {
//             dispatch(SetUserProfile(profile))
//         },
//
//     }
// }

export default compose<FC>(connect(mapStateToProps, {SetUserProfileTC, SetUserStatusTC, UpdateStatusTC}), withRouter, withAuthRedirect)(ProfileContainer)
// export default compose<FC>(connect(mapStateToProps, {SetUserProfileTC, SetUserStatusTC, UpdateStatusTC}), withRouter)(ProfileContainer)


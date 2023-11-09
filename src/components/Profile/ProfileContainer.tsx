import React, {FC} from "react";
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileUserType, SetUserProfileTC, SetUserStatusTC, UpdateStatusTC, UploadPhotoTC} from "../../redux/reducers/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/RedirectComponent";


type PathParamsType = { userId: string }
type MapStateToPropsType = {

    profile: ProfileUserType,
    status: string,
    authorizedUserId: null | number,
    isAuth: boolean
}
type MapDispatchToPropsType = {
    SetUserProfileTC: (userId: number) => void,
    SetUserStatusTC: (userId: number) => void,
    UpdateStatusTC: (status: string) => void,
    UploadPhotoTC: (file: File) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    reshreshProfile() {
        let userId: number = Number(this.props.match.params.userId)
        if (!userId && this.props.profile) {
            userId = Number(this.props.authorizedUserId)
            if (!this.props.authorizedUserId) {
                this.props.history.push('/login')
                //редирект если нет пользовател обратно на логин
            }
        }
        this.props.SetUserProfileTC(userId)
        this.props.SetUserStatusTC(userId)
    }

    componentDidMount() {
        this.reshreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.reshreshProfile()
        }

    }

    render() {
        return (
            <div className={s.content}>
                <Profile UploadPhoto={this.props.UploadPhotoTC} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status}
                         UpdateStatus={this.props.UpdateStatusTC}/>
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

export default compose<FC>(connect(mapStateToProps, {SetUserProfileTC, SetUserStatusTC, UpdateStatusTC, UploadPhotoTC}), withRouter, withAuthRedirect)(ProfileContainer)


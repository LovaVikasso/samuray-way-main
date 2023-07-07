import React, {FC} from "react";
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileUserType, SetUserProfileTC, SetUserStatusTC, UpdateStatusTC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
// import {withAuthRedirect} from "../../hoc/RedirectComponent";


type PathParamsType = { userId: string }
type MapStatePropsType = {
    profile: ProfileUserType,
    status: string
}
type MapDispatchPropsType = {
    SetUserProfileTC: (userId: number) => void,
    SetUserStatusTC: (userId:number) => void,
    UpdateStatusTC: (status:string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        //my id 28820
        if (!userId && this.props.profile) {
            userId = 28220
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


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         SetUserProfile: (profile) => {
//             dispatch(SetUserProfile(profile))
//         },
//
//     }
// }

// const WithURLDataContainer = withRouter(ProfileContainer)
// export default connect(mapStateToProps, {SetUserProfile})(WithURLDataContainer)
// export default connect(mapStateToProps, {SetUserProfile})(ProfileContainer)
// export default withAuthRedirect(compose<FC>(connect(mapStateToProps, {SetUserProfileTC}),withRouter)(ProfileContainer))
// export default compose<FC>(connect(mapStateToProps, {SetUserProfileTC, SetUserStatusTC, UpdateStatusTC}), withRouter, withAuthRedirect)(ProfileContainer)
export default compose<FC>(connect(mapStateToProps, {SetUserProfileTC, SetUserStatusTC, UpdateStatusTC}), withRouter)(ProfileContainer)


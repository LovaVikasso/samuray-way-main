import React, {ComponentType, FC} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {isAuth:boolean}
const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => ({isAuth: state.auth.isAuth})
export function withAuthRedirect<T extends {}>(Component: FC<T>) {


    const RedirectComponent = (props: MapStateToPropsType) => {

        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T} />
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)

    // const  ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    // return ConnectedRedirectComponent
}


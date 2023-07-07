import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthMeType} from "../../redux/auth-reducer";
type HeaderPropsType = {authData:AuthMeType}
const Header = (props:HeaderPropsType) => {
    // console.log(props.authData)
    return (

        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.authData.isAuth ? props.authData.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header

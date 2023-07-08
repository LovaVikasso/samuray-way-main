import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthMeType} from "../../redux/auth-reducer";

type HeaderPropsType = { authData: AuthMeType, LogoutTC: () => void }
const Header = (props: HeaderPropsType) => {
    console.log(props.authData)
    return (

        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.authData.isAuth
                    ? <div>{props.authData.login}
                        <button onClick={props.LogoutTC}>LogOut</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header

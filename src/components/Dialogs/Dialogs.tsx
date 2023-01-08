import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {}
const Dialogs = (props: DialogsType) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}><NavLink to="/dialogs/1">Victoria</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/2">Natalia</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/3">Leyla</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/4">Milly</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/5">Yasno</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello dear friend</div>
                <div className={s.message}>Nice to see you again</div>
                <div className={s.message}>Would you be so kindly?</div>
            </div>
        </div>

    )
}
export default Dialogs
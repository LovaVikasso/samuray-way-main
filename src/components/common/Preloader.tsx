import React from 'react';
import s from "./Preloader.module.css";
import preloader from "../../assets/images/loading.gif";

export const Preloader = () => {
    return (
        < img className={s.preloader} src={preloader} alt="loading"/>
    );
};

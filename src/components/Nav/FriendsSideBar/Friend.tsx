import s from "./Friends.module.css";
import React from "react";

const Friend = () => {
    return (
        <div className={s.friend}>
            <img
                src="https://e7.pngegg.com/pngimages/659/34/png-clipart-computer-icons-designer-avatar-design-business-silhouette.png"
                alt={""}/>
            <span className={s.friendText}>Anna</span>
        </div>
    )
}
export default Friend
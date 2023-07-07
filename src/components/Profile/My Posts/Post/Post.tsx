import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../redux/profile-reducer";


const Post: React.FC<PostType> = (props) => { //приходят пропсы типа посттайп
  return (
        <div className={s.post}>
            <div className={s.item}>
                <img src='https://thebiggest.ru/wp-content/uploads/2018/01/large-flowers.jpg' alt=''/>
                {props.message} {/*а там где используем пост используем атрибуты мэсседж*/}
            </div>
            <div className={s.like}><span>Like {props.likesCount}</span></div>

        </div>
    )
}
export default Post
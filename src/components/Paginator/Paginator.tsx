import React from 'react';
import s from './Paginator.module.css'

type PaginatorPropsType = {
    totalUsersCount: number,
    currentPage:number,
    pageSize: number,
    onChangePage:(page: number) => void,

}
export const Paginator:React.FC<PaginatorPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pages}>
            {pages.map(page => <span
                key={page}
                onClick={() => props.onChangePage(page)}
                className={props.currentPage === page ? s.selectedPage : ''}> {page} </span>)}
        </div>
    )
}
import React, {useState} from 'react';
import s from './Pagination.module.css'

type PaginatorPropsType = {
    totalItemsCount: number, //при первой инициализации приложения сколько всего items, потом с сервера
    currentPage: number, //текущая страницы, меняем в reducer'e
    pageSize: number, //сколько items на странице
    onChangePage: (page: number) => void,
    portionSize?: number

}
export const Pagination: React.FC<PaginatorPropsType> = ({totalItemsCount, currentPage, pageSize, onChangePage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize) //сколько всего страниц делим на размер порции
    let [portionNumber, setPortionNumber] = useState(1) // для изменения порции, со старта храним первую порцию
    let leftPortionPagesNumber = (portionNumber - 1) * portionSize + 1 //левая граница, номер элемента первого в порции
    let rightPortionPagesNumber = portionNumber * portionSize // правая граница, номер элемента последнего в порции

    const prevButtonHandler = () => {
        setPortionNumber(portionNumber - 1)
    }
    const nextButtonHandler = () => {
        setPortionNumber(portionNumber + 1)
    }
    return (
        <div className={s.pages}>
            {portionNumber > 1 && < button onClick={prevButtonHandler}> prev </button>}  {/* если в первой порции, то кнопку не видим*/}

            {pages
                .filter(p => p >= leftPortionPagesNumber && p <= rightPortionPagesNumber) // только те страницы, которые между границами
                .map(page => <span
                    key={page}
                    onClick={() => onChangePage(page)}
                    className={currentPage === page ? s.selectedPage : ''}> {page} </span>)}
            {portionCount> portionNumber && < button onClick={nextButtonHandler}> next </button>}  {/* если страничек больше чем размер порции, то кнопка*/}
        </div>
    )
}
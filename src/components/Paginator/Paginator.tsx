import React, {useState} from 'react';
import s from './Paginator.module.css'
import {useAppDispatch} from '../../redux/redux-store';
import { ChangePageSize } from '../../redux/reducers/users-reducer';

type PaginatorPropsType = {
    totalItemsCount: number, //при первой инициализации приложения сколько всего items, потом с сервера
    currentPage: number, //текущая страницы, меняем в reducer'e
    pageSize: number, //сколько items на странице
    onChangePage: (page: number) => void,
}


export const Paginator: React.FC<PaginatorPropsType> = ({totalItemsCount, currentPage, pageSize, onChangePage}) => {
let [portionSize, setPortionSize] = useState(5)
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize) //сколько всего страниц делим на размер порции
    let [portionNumber, setPortionNumber] = useState(1) // для изменения порции, со старта храним первую порцию
    let leftPortionPagesNumber = (portionNumber-1) * portionSize + 1 //левая граница, номер элемента первого в порции
    let rightPortionPagesNumber = portionNumber * portionSize // правая граница, номер элемента последнего в порции

    const prevButtonHandler = () => {
        setPortionNumber(portionNumber - 1)

    }
    const nextButtonHandler = () => {
        setPortionNumber(portionNumber + 1)
    }
    return (
        <div className={s.pages}>
            {portionNumber > 1 &&
                < button onClick={prevButtonHandler}>{`<`}</button>} {/* если в первой порции, то кнопку не видим*/}

          {/*Всегда показываем первую страницу*/}
            {/*{leftPortionPagesNumber > 1 && (*/}
            {/*    <span className={currentPage === 1 ? s.selectedPage : ''} onClick={() => onChangePage(1)}>1</span>*/}
            {/*)}*/}

            {/*/!* Добавляем "..." перед текущей страницей *!/*/}
            {/*{portionCount >= 1 && leftPortionPagesNumber > 2 && (*/}
            {/*    <span className={s.dots}>...</span>*/}
            {/*)}*/}

            {pages
                .filter(p => p >= leftPortionPagesNumber && p <= rightPortionPagesNumber) // только те страницы, которые между границами
                .map(page => <span
                    key={page}
                    onClick={() => onChangePage(page)}
                    className={currentPage === page ? s.selectedPage : ''}> {page} </span>)}
            {/* Добавляем "..." между первыми страницами и текущей страницей */}
            {/*{portionCount > 1 && portionNumber <= portionCount - 1 && (*/}
            {/*    <span className={s.dots}>...</span>*/}
            {/*)}*/}

            {/* Добавляем номер последнюей страницы */}
            {/*{portionNumber < portionCount && (*/}
            {/*    <span onClick={() => onChangePage(pagesCount)}>{pagesCount}</span>*/}
            {/*)}*/}
            {portionCount > portionNumber && < button
                onClick={nextButtonHandler}> {`>`} </button>} {/* если страничек больше чем размер порции, то кнопка*/}

       {/*     <span>Показать <select>*/}
       {/*    {values.map(value => <option value={value.value}>{value.name}</option>)}*/}
       {/*</select> на странице</span>*/}


        </div>
    )
}
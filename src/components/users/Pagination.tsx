import React from 'react';
import styles from "./Users.module.css";

type PaginationProps = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChange: (page: number) => void
    portionSize?: number
};

export const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChange, portionSize = 10}: PaginationProps) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = React.useState(Math.ceil(currentPage / portionSize));
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Назад</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <span
                            key={p}
                            className={p === currentPage ? styles.selectedPage : ''}
                            onClick={() => onPageChange(p)}
                            style={{cursor: 'pointer', padding: '0 5px'}}
                        >
                            {p}
                        </span>
                    );
                })}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Вперед</button>}
        </div>
    );
};
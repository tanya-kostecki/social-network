import React from 'react';
import styles from "./Users.module.css";

type PaginationProps = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChange: (page: number) => void
};
export const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChange, }: PaginationProps) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let nextPage = currentPage + 1
    let prevPage = currentPage - 1
    return (
        <div>
            {prevPage >= 1 && <button onClick={() => onPageChange(prevPage)}>Назад</button>}
            <span className={styles.selectedPage}>{currentPage}</span>
            {nextPage <= pagesCount && <button onClick={() => onPageChange(nextPage)}>Вперед</button>}
        </div>
    );
};
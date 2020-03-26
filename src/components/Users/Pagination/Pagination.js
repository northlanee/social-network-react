import React from "react";
import s from "./Pagination.module.css";

const Pagination = ({totalUsersCount, pageSize, currentPage, pageClickHandler}) => {

    const createPagesArray = (pagesCount) => {
        const pagesArray = [];
        pagesArray.push(1);
        for (let i = 1; i <= pagesCount; i++) {
            if (i > currentPage - 3 && i < currentPage + 3 && i !== 1 && i !== pagesCount) pagesArray.push(i);
        }
        pagesArray.push(pagesCount);
        return pagesArray;
    };

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pagesArray = createPagesArray(pagesCount);

    const paginationList = pagesArray.map(page => {
        return <li key={page}
                   className={`${s.pageNumber} ${page === currentPage ? s.selectedPage : null}`}
                   onClick={() => pageClickHandler(page)}
        >{page}</li>
    });

    return (
        <ul className={s.pagination}>
            {paginationList}
        </ul>
    );
};

export default Pagination;

import React, {FC} from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

type PaginationType = {
    onChangePage: (page: number) => void
    currentPage: number
}

export const Pagination: FC<PaginationType> = ({onChangePage, currentPage}) =>
    <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={event => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
    />


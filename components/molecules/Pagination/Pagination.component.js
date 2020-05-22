import React from 'react';
import StyledPagination from './Pagination.style';

export default function Pagination(props) {
    const prev = () => {
        props.onPaginate(props.currentPage - 1);
    }

    const next = () => {
        props.onPaginate(props.currentPage + 1);
    }

    const page = props.currentPage + 1;

    return (
        <StyledPagination>
            <p className="pagination-info">Showing Page {page} of {props.totalPages}</p>
            <div>
                <button className="pagination-cta" onClick={prev} disabled={page === 1}>prev page</button>
                <button className="pagination-cta" onClick={next} disabled={page >= props.totalPages}>next page</button>
            </div>
        </StyledPagination>
    );
}
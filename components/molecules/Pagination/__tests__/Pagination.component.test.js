import '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Pagination from '../Pagination.component';

test('should render pagination component', () => {
    const { container } = render(<Pagination
        totalPages="10"
        currentPage="0"
    />);
    const renderNewsItemCount = container.querySelectorAll('.pagination-info').length;
    
    expect(renderNewsItemCount).toBe(1);
    expect(screen.getByText('prev page')).not.toBeNull();
    expect(screen.getByText('next page')).not.toBeNull();
});

test('should disable prev button on first page', () => {
    render(<Pagination
        totalPages={10}
        currentPage={0}
    />);

    expect(screen.getByText('prev page').disabled).toBe(true);
});

test('should disable next button on last page', () => {
    render(<Pagination
        totalPages={10}
        currentPage={10}
    />);

    expect(screen.getByText('next page').disabled).toBe(true);
});

test('should call next and previoud page on next/prev cta click', () => {
    const onPaginate = jest.fn();
    render(<Pagination
        totalPages={10}
        currentPage={2}
        onPaginate={onPaginate}
    />);

    fireEvent.click(screen.getByText('prev page'));
    fireEvent.click(screen.getByText('next page'));

    expect(onPaginate.mock.calls[0][0]).toBe(1);
    expect(onPaginate.mock.calls[1][0]).toBe(3);
});


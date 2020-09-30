import '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent } from '@testing-library/react'
import SpaceXFilter from '../SpaceXFilter.component';

describe('SpaceXFilter', () => {

  test('should render component', () => {
    const filters = [
        {label: 'Filter 1', value: 'value 1'},
        {label: 'Filter 2', value: 'value 2'}
      ];  
    const onFilterChange = jest.fn();
    const { queryByText } = render(<SpaceXFilter filters={filters} onFilterChange={onFilterChange} />);
    
    expect(queryByText('Filter 1')).toBeTruthy();
    expect(queryByText('Filter 2')).toBeTruthy();
  });

  test('should handle onFilterChange event', () => {
    const filters = [
        {label: 'Filter 1', value: 'value 1'},
        {label: 'Filter 2', value: 'value 2'}
      ];  
    const onFilterChange = jest.fn();
    const { queryByText } = render(<SpaceXFilter filters={filters} onFilterChange={onFilterChange} />);
    
    fireEvent.click(queryByText('Filter 1'));
    fireEvent.click(queryByText('Filter 2'));

    expect(onFilterChange).toHaveBeenCalledWith('value 1');
    expect(onFilterChange).toHaveBeenCalledWith('value 2');
  });

});

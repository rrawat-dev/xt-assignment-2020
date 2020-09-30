import React, { useState } from 'react';
import StyledSpaceXFilter from './SpaceXFilter.style';

const SpaceXFilter = (props) => {
  const { title, filters, onFilterChange } = props;
  const [selectedFilter, setSelectedFilter] = useState(null);

  const onFilterClick = (value) => {
    const newValue = selectedFilter === value ? null : value;
    setSelectedFilter(newValue);
    onFilterChange(newValue);
  }

  return (
    <StyledSpaceXFilter>
      <h3>{title}</h3>
      <ul>
      {
        filters.map((filter, index) => (
          <li key={index}>
            <button
              className={selectedFilter === filter.value ? 'active' : ''}
              onClick={() => onFilterClick(filter.value)}
            >{filter.label}</button>
          </li>
        ))
      }
      </ul>
    </StyledSpaceXFilter>
  )
}

export default SpaceXFilter;
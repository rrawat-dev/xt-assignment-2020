import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpaceXFilter from './SpaceXFilter.component';
import {
  SPACEX_YEAR_FILTERS,
  SPACEX_LAUNCHES_FILTERS,
  SPACEX_LANDED_FILTERS
} from '../../../services/spacex/spacex.service';
import StyledSpaceXFilters from './SpaceXFilters.style';
import {
  fetchSpaceXDataAsyncAction
} from '../../../redux/actions/spacex.actions';

const SpaceXFilters = (props) => {
  const filters = useSelector(state => state.spacex.filters);
  const dispatch = useDispatch();

  const onYearFilterChange = (value) => {
    dispatch(fetchSpaceXDataAsyncAction({
      ...filters,
      launch_year: value
    }));
  };

  const onLaunchedFilterChange = (value) => {
    dispatch(fetchSpaceXDataAsyncAction({
      ...filters,
      launch_success: value
    }));
  };

  const onLandedFilterChange = (value) => {
    dispatch(fetchSpaceXDataAsyncAction({
      ...filters,
      land_success: value
    }));
  };

  return (
    <StyledSpaceXFilters>
      <h2>Filters:</h2>
      <SpaceXFilter
        title="Launch Year"
        filters={SPACEX_YEAR_FILTERS}
        onFilterChange={onYearFilterChange}
      />
      <SpaceXFilter
        title="Successful Launch"
        filters={SPACEX_LAUNCHES_FILTERS}
        onFilterChange={onLaunchedFilterChange}
      />
      <SpaceXFilter
        title="Successful Landing"
        filters={SPACEX_LANDED_FILTERS}
        onFilterChange={onLandedFilterChange}
      />
    </StyledSpaceXFilters>
  );
}

export default SpaceXFilters;
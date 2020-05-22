import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SpaceXCard from '../../molecules/SpaceXCard/SpaceXCard.component';
import StyledSpaceXLaunches from './SpaceXLaunches.style';

const SpaceXLaunches = () => {
  const { data = [], error = false, isFetching = false } = useSelector(state => state.spacex);

  if (isFetching) {
    return (
      <div>Loading..</div>
    );
  }

  if (error) {
    return (
      <div>error</div>
    );
  }

  if (data.length === 0) {
    return (
      <div>no result found</div>
    );
  }

  return (
    <StyledSpaceXLaunches>
      {
        Object.keys(data).map((key) => {
          const launch = data[key];
          return (
            <SpaceXCard launch={launch} />
          )
        })
      }
    </StyledSpaceXLaunches>
  );
}

export default SpaceXLaunches;
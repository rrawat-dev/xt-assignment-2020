import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SpaceXCard from '../../molecules/SpaceXCard/SpaceXCard.component';
import StyledSpaceXLaunches from './SpaceXLaunches.style';

const SpaceXLaunches = () => {
  const { data = {}, error = false, isFetching = false } = useSelector(state => state.spacex);
  const resultKeys = Object.keys(data);

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

  if (resultKeys.length === 0) {
    return (
      <StyledSpaceXLaunches>
        <div className="SpaceXLaunches__NoResult">
          Sorry, no result available for your search.
        </div>
      </StyledSpaceXLaunches>
    );
  }

  return (
    <StyledSpaceXLaunches>
      {
        resultKeys.map((key, index) => {
          const launch = data[key];
          return (
            <Fragment key={index}>
              <SpaceXCard launch={launch} />
            </Fragment>
          )
        })
      }
    </StyledSpaceXLaunches>
  );
}

export default SpaceXLaunches;
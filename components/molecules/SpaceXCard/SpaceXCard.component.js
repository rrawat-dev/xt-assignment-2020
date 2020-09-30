import React from 'react';
import StyledXCard from './SpaceXCard.style';

const SpaceXCard = (props) => {
  const { launch } = props;
  return (
    <StyledXCard>
      <div className="SpaceXCard__Img">
        <img src={launch.links.mission_patch_small} alt="" />
      </div>
      <div className="SpaceXCard__Title">{launch.mission_name}</div>
      {
        launch.mission_id.length > 0
        &&
        <div className="SpaceXCard__Missions">
          <b>Mission Ids:</b>
          <ul>
            {
              launch.mission_id.map(mission => (
                <li>{mission}</li>
              ))
            }
          </ul>
        </div>
      }
      <div className="SpaceXCard__LaunchYear">
        <b>Launch Year:</b> {launch.launch_year}
      </div>
      <div className="SpaceXCard__LaunchStatus">
        <b>Successful Launch:</b> {launch.launch_success ? 'Yes' : 'No'}
      </div>
      <div className="SpaceXCard__LandingStatus">
        <b>Successful Landing:</b> {launch.land_success ? 'Yes' : 'No'}
      </div>
    </StyledXCard>
  );
}

export default SpaceXCard;
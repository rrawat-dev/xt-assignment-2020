import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';
import { device } from '../../../styles/device.breakpoints';

const StyledXCard = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 5px;
  padding: 1rem 2.5rem;
  margin-bottom: 1rem;

  @media ${device.tablet} {
    flex-basis: 42%;
    padding: 1rem;
  }

  @media ${device.laptop} {
    flex-basis: 20%;
    padding: 1rem;
  }

  .SpaceXCard__Img {
    text-align: center;
    margin-bottom: 1rem;

    img {
      max-width: 100%;
    }
  }

  .SpaceXCard__Title {
    color: ${COLORS.BLUE};
    font-weight: bold;
    margin-bottom: 5px;
  }

  .SpaceXCard__Missions {
    margin-bottom: 5px;
    font-size: .8rem;

    ul {
      padding: 0 2rem;
      li {
        list-style-type: disc;
      }
    }
  }

  .SpaceXCard__LaunchYear {
    margin-bottom: 5px;
    font-size: .8rem;
  }

  .SpaceXCard__LaunchStatus {
    margin-bottom: 5px;
    font-size: .8rem;
  }

  .SpaceXCard__LandingStatus {
    margin-bottom: 5px;
    font-size: .8rem;
  }
`;

export default StyledXCard;
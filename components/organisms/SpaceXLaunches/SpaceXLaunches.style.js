import styled from 'styled-components';
import { device } from '../../../styles/device.breakpoints';

const StyledSpaceXLaunches = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export default StyledSpaceXLaunches;
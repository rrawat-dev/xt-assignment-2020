import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';
import { device } from '../../../styles/device.breakpoints';

const StyledSpaceXFilters = styled.div`
  background: ${COLORS.WHITE};
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;

  @media ${device.tablet} {
    margin-right: 1rem;
  }
`;
export default StyledSpaceXFilters;
import styled from 'styled-components';
import { device } from '../../../styles/device.breakpoints';

const StyledHomePage = styled.div`
  .container {
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
      flex-direction: row;
    }

    &__sidebar {
      @media ${device.tablet} {
        flex-basis: 250px;
      }
    }

    &__content {
      flex: 1;
    }
  }
`;

export default StyledHomePage;
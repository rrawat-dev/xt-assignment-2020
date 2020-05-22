import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';
import { device } from '../../../styles/device.breakpoints';

const StyledSpaceXFilter = styled.div`
  h3 {
    margin: 10px auto;
    color: ${COLORS.BLACK};
    border-bottom: 2px solid ${COLORS.GRAY};
    text-align: center;
    padding: 8px;
    width: 210px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      flex-basis: 50%;
      flex-grow: 1;
      margin-bottom: 1rem;

      &:nth-of-type(even) {
        text-align: left;
      }

      &:nth-of-type(even) {
        text-align: right;
      }
    }

    button {
      background: ${COLORS.LIGHT_GREEN};
      border: none;
      border-radius: 3px;
      padding: 10px 50px;
      font-size: 1rem;

      &:hover,
      &.active {
        background: ${COLORS.HIGHLIGHT_GREEN};
      }

      @media ${device.tablet} {
        padding: 10px 25px;
      }
    }
  }
`;
export default StyledSpaceXFilter;
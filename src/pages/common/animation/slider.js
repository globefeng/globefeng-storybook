import styled from 'styled-components';
import { keyframes } from 'styled-components'

const slider = keyframes`
  from {
    margin-left: 300px;
  }
  to {
    margin-left: 0px;
  }
`;
const Slider = styled.div`
  animation: ${slider} 0.5s linear 1;
`;

export default Slider;
import styled from 'styled-components';
import { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Rotation = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
`;

export default Rotation;

import React from 'react';
import { node, string } from 'prop-types';
import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
`
const RotateContainer = styled.div`
display: inline-block;
animation-name: ${rotateAnimation};
animation-duration: ${(props) => props.speed ? props.speed : '4s' };
animation-iteration-count: infinite;
animation-timing-function: linear;
`;

export const Rotation = ({ children, speed }) => {
  return (
    <RotateContainer speed={speed}>
      {children}
    </RotateContainer>
  );
};

Rotation.propTypes = {
  /**
   * Any element
   */
   children: node.isRequired,
   speed: string,
};

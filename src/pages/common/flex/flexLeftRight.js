import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
display: flex;
justify-contents: space-btween;
align-items: center;

@media (max-width: 768px) {
  flex-direction: ${props => props.reverse ? 'column-reverse' : 'column' };
}
`;

const LeftSide = Styled.div`
  flex-grow: ${props => props.grow};
  min-height: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
  `;

const RightSide = Styled.div`
  flex-grow: ${props => props.grow};
  min-height: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FlexLeftRight = (props) => {
  return (
    <Container reverse={props.reverse}>
      <LeftSide grow={props.leftGrow}>
        {props.left}
      </LeftSide>
      <RightSide grow={props.rightGrow}> 
        {props.right}
      </RightSide>
    </Container>
  )
}

export default FlexLeftRight;
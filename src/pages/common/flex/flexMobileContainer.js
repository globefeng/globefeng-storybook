import React from 'react';
import Styled from 'styled-components';
import { node } from 'prop-types';

const Container = Styled.div`
width: 80%;
margin: auto;
padding: 0px;

@media (max-width: 768px) {
  width: 90%;
  padding: 0px;
}

@media (max-width: 420px) {
  width: 100%;
  padding: 0px 10px;
}
`;

const FlexMobileContainer = (props) => {
  return (
    <Container {...props}>
        {props.children}
    </Container>
  )
}

FlexMobileContainer.propTypes = {
  children: node,
}

export default FlexMobileContainer;
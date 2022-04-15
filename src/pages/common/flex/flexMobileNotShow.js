import React, { useContext } from 'react';
import Styled from 'styled-components';
import { AppContext } from '../../../context/appContext';
import { node, number } from 'prop-types';

const Container = Styled.div`
display: flex;
`;

const FlexMobileNotShow = (props) => {
  const { windowWidth } = useContext(AppContext);

  if (props.minWidth && windowWidth <= props.minWidth) {
    return null;
  }

  if (props.maxWidth && windowWidth > props.maxWidth) {
    return null;
  }

  return (
    <Container {...props}>
        {props.children}
    </Container>
  )
}

FlexMobileNotShow.propTypes = {
  minWidth: number,
  maxWidth: number,
  children: node,
}


export default FlexMobileNotShow;
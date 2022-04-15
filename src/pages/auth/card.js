import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

const CardContainer = styled.div`
border-radius: 6px;
box-shadow: 0 0 4px 4px rgba(200, 200, 200, .5);
width: 100%;
max-width: 400px;
min-width: 100px; 
padding: 20px;
margin: 20px;
`;

const Title = styled.div`
font-size: 24px;
font-weight: bold;
margin-bottom: 30px;
`;

const Card = (props) => {
  const { title } = props;

  return (
    <Container>
      <CardContainer>
        <Title>{title}</Title>
        {props.children}
      </CardContainer>
    </Container>
  )
}

export default Card;
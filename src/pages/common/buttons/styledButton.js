import styled from 'styled-components';

const StyledButton = styled.button`
display: flex;
justify-content: center;
align-items:center;
cursor: pointer;
border: none;
border-radius: 4px;
box-shadow: none;
text-transform: none;
box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.5);
outline: none;

&:hover {
  box-shadow: 5px 5px 5px #aaaaaa;
}
`;

export default StyledButton;
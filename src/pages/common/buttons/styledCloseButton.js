import React from "react";
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

const Contanier = styled.div`
display: flex;
align-items: center;
padding: 2px;
&:hover {
  background-color: #E0E0E0;
}
`;

const StyledCloseButton = ({...props}) => {
  return (
    <Contanier>
      <CloseIcon {...props}/>
    </Contanier>
  )
}

export default StyledCloseButton;


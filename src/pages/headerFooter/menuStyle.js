import Styled from 'styled-components';

const backgroundColor = `#282A35`;
const activeBackgroundColor = `#04AA6D`;
const menuColor = `#FFFFFF`;

const FlexSpaceBetween = Styled.div`
width: 100%;
z-index: 10000;
display: flex;
flexDirection: row;
justify-content: space-between;
overflow: hidden;
`;

const FlexRowDiv = Styled.div`
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
height: 40px;
padding-left: 16px;
padding-right: 16px;
color: ${menuColor};
&:hover {
  background-color: ${activeBackgroundColor};
}
`;

const DropdownMenu = Styled.div`
padding: 10px 20px;
color: ${menuColor};
&:hover {
  background-color: ${activeBackgroundColor};
}
`;

const Dropdown = Styled.div`
&:hover {
  background-color: ${activeBackgroundColor};
}
&:hover > div {
  visibility: visible;
}
`;

const DropdownContent = Styled.div`
  visibility: hidden;
  position: absolute;
  background-color: white;
`;

const MenuContainer = Styled.div`
margin-top: 2px;
background-color: ${backgroundColor};
padding: 6px;
`;

export { FlexSpaceBetween, FlexRowDiv, DropdownMenu, Dropdown, DropdownContent, MenuContainer }
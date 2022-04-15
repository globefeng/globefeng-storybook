import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import Styled from 'styled-components';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import Collapse from '@material-ui/core/Collapse';
import { any, array, bool, string } from 'prop-types';

const titleBackgroundColor = `#04AA6D`;

const MenuContainer = Styled.div`
cursor: pointer;
color: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 16px;
height: 40px;
background-color: ${props => props.isMouseOver ? titleBackgroundColor : null};
position: relative;
`;

const DropDownContainer = Styled.div`
border-left: 6px solid ${titleBackgroundColor};
border-right: 6px solid ${titleBackgroundColor};
border-bottom: 6px solid ${titleBackgroundColor};
display: flex;
align-items: center;
position: absolute;
top: 40px;
left: 0px;
visibility: ${props => props.isMouseOver ? 'visible' : 'hidden' };
`;

const Menu = Styled.div`
display: flex;
justify-content: center;
flex-direction: column;
cursor: pointer;
color: #FFFFFF;
white-space: nowrap;
padding: 0px 32px;
height: 30px;
&:hover {
  background-color: ${titleBackgroundColor};
}
`;

const DropDownMenu = (props) => {
  const { collapsible } = props;
  const [titleMouseOver, setTitleMouseOver] = useState(false);
  const [showMenu, setShowMenu ] = useState(false);

  const onMenuClick = () => {
    if (props.menus) {
      setShowMenu((prev) => !prev)
    }
    else if (props.link) 
    {
      props.history.push(props.link)
    }
      
  }

  if (collapsible) {
    return (
      <div>
        <MenuContainer isMouseOver={titleMouseOver} onClick={onMenuClick}
                      onMouseOver={() => setTitleMouseOver(true)} 
                      onMouseOut={() => setTitleMouseOver(false)}>
            <span>{props.title}</span>
            {props.menus && !showMenu && <ArrowDropDown fontSize="small" />}
            {props.menus && showMenu && <ArrowDropUp fontSize="small" />}
        </MenuContainer>
        <Collapse in={showMenu}>
          {props.menus && props.menus.map((item, index) => {
            return (
              <Menu key={index} onClick={() => {props.history.push(item.link);setTitleMouseOver(false)}}>
                {item.name}   
              </Menu>
            )
          })}
        </Collapse>
      </div>
    )
  }

  return (
    <MenuContainer isMouseOver={titleMouseOver} 
                   onMouseOver={() => setTitleMouseOver(true)} 
                   onMouseOut={() => setTitleMouseOver(false)}>
      <span>{props.title}</span>
      <ArrowDropDown fontSize="small" />
      <DropDownContainer isMouseOver={titleMouseOver} >
        {props.menus && props.menus.map((item, index) => {
          return (
            <Menu key={index} onClick={() => {props.history.push(item.link);setTitleMouseOver(false)}}>
              {item.name}   
            </Menu>
          )
        })}
      </DropDownContainer>
    </MenuContainer>
  )
}

DropDownMenu.propTypes = {
  title: string,
  collapsible: bool,
  menus: array,
  link: string,
  history: any,
}

export default withRouter(DropDownMenu);
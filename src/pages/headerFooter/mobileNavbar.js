import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { Home } from '@material-ui/icons';
import { FlexRowDiv } from './menuStyle';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import Collapse from '@material-ui/core/Collapse';
import UserMenus from './menus';
import DropDownMenu from './dropDownMenu';

const IconContainer = styled.div`
cursor: pointer;
display: flex;
align-items: center;
padding: 0px 8px;
&:hover {
  background-color: #3a3c3f;
}
`;

const MobileNavBarComponent = () => {
  const [showMenu, setShowMenu ] = useState(false);

  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Link style={{ textDecoration: 'none', marginRight: '10px' }} to="/">
            <FlexRowDiv>
              <Home fontSize="small" />
              <span style={{marginLeft: '6px'}}>Home</span>
            </FlexRowDiv>
          </Link>
        </div>
        <div style={{display: 'flex', flexDirection:'row'}}>
          <IconContainer onClick={() => setShowMenu((prev) => !prev) }>
            <MenuIcon style={{color: '#FFFFFF', width: '20px', height: '20px'}} />
          </IconContainer>
        </div>
      </div>
      <div>
        <Collapse in={showMenu}>
          <div>
            {UserMenus.map((menu, index) => {
              return <DropDownMenu key={index} title={menu.name} link={menu.link} menus={menu.submenus} collapsible={true} />
            })}
          </div>
        </Collapse>

      </div>
    </div>

  );
}

export default withRouter(MobileNavBarComponent);


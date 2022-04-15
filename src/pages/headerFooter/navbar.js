import React from "react";
import { Link, withRouter } from "react-router-dom";
import Menus from './menus';
import { Home, ArrowDropDown } from '@material-ui/icons';
import { FlexRowDiv, DropdownMenu, Dropdown, DropdownContent, MenuContainer } from './menuStyle';
import FlexMobileContainer from "../common/flex/flexMobileContainer";
import FlexMobileNotShow from '../common/flex/flexMobileNotShow';
import MobileNavbar from "./mobileNavbar";
import { any } from 'prop-types';

const NavbarComponent = (props) => {

  return (
    <div style={{backgroundColor: '#282A35', position: 'sticky', top: '0', zIndex: '100'}}>
      <FlexMobileContainer>
          <FlexMobileNotShow minWidth={768} style={{width: '100%', justifyContent: 'space-between', overflow: 'hidden'}} >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Link style={{ textDecoration: 'none', marginRight: '10px' }} to="/">
                  <FlexRowDiv>
                    <Home fontSize="small" />
                    <span style={{marginLeft: '6px'}}>Home</span>
                  </FlexRowDiv>
                </Link>
              </div>
              {Menus.map((menu, index) => {
                return (
                  <Dropdown key={index}>
                    <FlexRowDiv onClick={() => { if (menu.link) {props.history.push(menu.link)} }}>
                      {menu.name}
                      {menu.submenus && <ArrowDropDown fontSize="small" />}
                    </FlexRowDiv>
                    {menu.submenus && 
                      <DropdownContent>
                        <MenuContainer>
                          {menu.submenus && menu.submenus.map((submenu, subIndex) => {
                            return ( 
                              <DropdownMenu key={`${index}-${subIndex}`} onClick={() => {
                                props.history.push(submenu.link);
                                }}>
                                <span>{submenu.name}</span>
                              </DropdownMenu>
                            )})
                          }
                        </MenuContainer>
                      </DropdownContent>
                    }
                  </Dropdown>
                )
              })}
            </div>          
        </FlexMobileNotShow>
      </FlexMobileContainer>
      <FlexMobileContainer>
        <FlexMobileNotShow maxWidth={768} style={{width: '100%'}} >
          <MobileNavbar />
        </FlexMobileNotShow>
      </FlexMobileContainer>

    </div>
  );
}

NavbarComponent.propTypes = {
  history: any,
}
export default withRouter(NavbarComponent);


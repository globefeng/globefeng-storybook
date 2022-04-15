import React, { useContext, useRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { ArrowDropDown, AccountCircle } from '@material-ui/icons';
import { AppContext } from '../../context/appContext';
import { FlexRowDiv, DropdownMenu, Dropdown, DropdownContent, MenuContainer } from './menuStyle';

const UserMenuComponent = (props) => {
  const { CurrentUser, dispatch } = useContext(AppContext);
  const [ right, setRight ] = useState(0);
  const myRef = useRef(null);

  const updateDropdown = () => {
    if (myRef) {
      setRight(Math.floor(window.innerWidth - myRef.current.getBoundingClientRect().right) - 16);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {CurrentUser ?
      <Dropdown>
        <FlexRowDiv ref={myRef} onMouseOver={() => updateDropdown() }>
          <AccountCircle fontSize="medium" />
          <ArrowDropDown fontSize="medium" />
        </FlexRowDiv>
        <DropdownContent style={{right: right}}>
          <MenuContainer>
            <DropdownMenu style={{textAlign:'right'}} onClick={() => {
                props.history.push('/');
                }}>
                <span>My account</span>
            </DropdownMenu>                  
            <DropdownMenu style={{textAlign:'right'}} onClick={() => {
                dispatch({type:'LOGOUT'});
                localStorage.removeItem('loginUserInfo');
                localStorage.removeItem('loginTime');
                props.history.push('/');
                }}>
                <span>Logout</span>
            </DropdownMenu>
          </MenuContainer>
        </DropdownContent>
      </Dropdown>
      :
      <Link style={{ textDecoration: 'none', marginRight: '10px' }} to="/?c=login">
        <FlexRowDiv>
          Sign in / Register
        </FlexRowDiv>
      </Link>
      }
    </div>          
  );
}

export default withRouter(UserMenuComponent);


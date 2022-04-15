import React, { Fragment} from "react";
import HeaderContent from './headerContent';
import NavbarComponent from './navbar';

const HeaderComponent = () => {
  return (
    <Fragment>
      <HeaderContent />
      <NavbarComponent />
    </Fragment>
  );
}

export default HeaderComponent;


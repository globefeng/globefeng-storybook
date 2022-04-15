import React, { useContext } from 'react';
import SignIn from '../../auth/signin';
import { AppContext } from '../../../context/appContext';

const WithAuth = (WrappedComponent) => {
  const HOC = (props) => {
    const { CurrentUser } = useContext(AppContext);
    if (!CurrentUser) {
      return <SignIn returnPath={props.location.search} />
    }
    return <WrappedComponent {...props}/>
  }
  return HOC;
};

export default WithAuth;
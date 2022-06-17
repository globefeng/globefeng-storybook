import React, { createContext, useReducer } from 'react';
import { appReducer } from './appReducer';
import { node } from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [appStore, dispatch] = useReducer(appReducer, [], () => {
     return { name: 'React Template', 
              count: 1,
              CurrentUser: null,
              Token: null,
              windowWidth: 1200,
              CurrentTheme: 'light',
      };
  });

  return (
    <AppContext.Provider value={{ ...appStore, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: node.isRequired,
}

export default AppContextProvider;
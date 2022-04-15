import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AppContext } from './context/appContext';
import { AuthService } from './service/auth';
import Header from './pages/headerFooter/index';
import Footer from './pages/headerFooter/footer';
import WindowWidth from "./pages/common/windowWidth";
import { ThemeProvider } from "styled-components";
import { themes } from "./pages/theme/themes"
import { GlobalStyles } from './pages/theme/globalStyles';
import HomeComponent from './pages/home/index';
import ButtonPage from './pages/button/index';

const AppComponent = () => {
  const { CurrentTheme, dispatch } = useContext(AppContext);

  useEffect(() => {
    let userInfo = AuthService.getUserInfo();
    if (userInfo) {
      dispatch({type:'LOGIN', data:userInfo});
    }
    const themeValue = window.localStorage.getItem("MyTheme");
    if (themeValue) {
      dispatch({type: 'SET_THEME', data: themeValue});
    }
  }, [dispatch])

  return (
    <Router>
      <ThemeProvider theme={themes[CurrentTheme]}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/button" component={ButtonPage} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
        <WindowWidth />
      </ThemeProvider>
    </Router>
  );
}

export default AppComponent;


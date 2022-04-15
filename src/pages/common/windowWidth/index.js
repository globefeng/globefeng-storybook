import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../../context/appContext';

const WindowWidth = () => {
    const { windowWidth, dispatch } = useContext(AppContext);

    useEffect(() => {
      let interval = null;

      interval = setInterval(() => {
        let rootDiv = document.getElementById('root');
        if (rootDiv !== undefined && rootDiv !== null) {
          let rect = rootDiv.getBoundingClientRect();
          let width = Math.floor(rect.width);
          dispatch({type: 'SET_WINDOW_WIDTH', data: width});
        }
      }, 100);

      return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div style={{backgroundColor:'#282A35', color:'white', width: '100%', height: '0px', display: 'flex', justifyContent: 'center'}}>
          <span>Window width = {windowWidth}</span>
        </div>
    )
}

export default WindowWidth;
import React, { useContext } from "react";
import Radio from '@material-ui/core/Radio';
import { AppContext } from '../../context/appContext';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const ThemeSwitch = () => {
  const { CurrentTheme, dispatch } = useContext(AppContext);

  const handleChange = (event) => {
    window.localStorage.setItem("MyTheme", event.target.value);
    dispatch({type: 'SET_THEME', data: event.target.value})
  };

  return (
    <div style={{display: 'inline-flex', width: '160px', justifyContent: 'space-between', justifyItems: 'center'}}>
      <div>
        <GreenRadio
          id="light"
          checked={CurrentTheme === 'light'}
          onChange={handleChange}
          value="light"
          name="radio-button-demo"
        />
        <label htmlFor="light">Light</label>
      </div>
      <div>
        <GreenRadio
          id="dark"
          checked={CurrentTheme === 'dark'}
          onChange={handleChange}
          value="dark"
          name="radio-button-demo"
        />
        <label htmlFor="dark">Dark</label>
      </div>
    </div>
  );
}

export default ThemeSwitch;


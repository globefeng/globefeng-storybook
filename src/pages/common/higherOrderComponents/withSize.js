import React, { Fragment, useState, useEffect } from 'react';

const WithSize = (Component) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return class extends React.Component {
    render() {
      return (
        <Fragment>
          <div>
            <h2>With Size {seconds}</h2>
          </div>

          <Component {...this.props} />
        </Fragment>
        )
    }
  }
}

export default WithSize;
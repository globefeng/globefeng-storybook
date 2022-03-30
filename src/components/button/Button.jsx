import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, onClick, ...props }) => {
  return (
    <div
      role="button" tabIndex={0} onClick={onClick}
      type="button"
      className={['storybook-button', `storybook-button--${size}`, primary ? 'storybook-button--primary' : 'storybook-button--secondary'].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <CircularProgress size={18} color="inherit" style={{marginRight: '20px'}} />
      {label}
    </div>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

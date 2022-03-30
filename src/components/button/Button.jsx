import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, onClick, showIcon, ...props }) => {
  const getSize = () => {
    if (size === 'small') return 12;
    else if (size === 'medium') return 14;    
    return 16;
  }

  return (
    <div
      role="button" tabIndex={0} onClick={onClick}
      type="button"
      className={['button', `button--${size}`, primary ? 'button--primary' : 'button--secondary'].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {showIcon && <CircularProgress className={`icon--${size}`} size={getSize()} color="inherit" style={{marginRight: '8px'}} />}
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
   * boolean to show/hide progress icon
   */
  showIcon: PropTypes.bool,
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
  showIcon: true,
  size: 'medium',
  onClick: undefined,
};

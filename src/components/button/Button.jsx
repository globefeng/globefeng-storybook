import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ color, backgroundColor, size, label, onClick, showIcon, ...props }) => {
  const getSize = () => {
    if (size === 'small') return 10;
    else if (size === 'medium') return 14;    
    return 18;
  }

  return (
    <div
      role="button" tabIndex={0} onClick={onClick}
      type="button"
      className={['button', `button--${size}`].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {showIcon && <CircularProgress size={getSize()} color="inherit" style={{marginRight: '8px'}} />}
      {label}
    </div>
  );
};

Button.propTypes = {
  /**
   * boolean to show/hide progress icon
   */
  showIcon: PropTypes.bool,
  /**
   * What background color to use
   */
   color: PropTypes.string,
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
  color: 'white',
  backgroundColor: '#1976d2',
  showIcon: true,
  size: 'medium',
  onClick: undefined,
};

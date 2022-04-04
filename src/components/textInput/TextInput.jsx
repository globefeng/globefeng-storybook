import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './textInput.css';
import { Container, InputObject, Label } from "./textInput.styles";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

/**
 * Primary UI component for user interaction
 */
export const TextInput = ({ size, placeholder, onTextChanged, hasError, ...props }) => {
  const [focused, setFocused] = useState(false);
  const [textValue, setTextValue] = useState('');
  const labelState = focused || textValue.length > 0;
  const getErrorSize = () => {
    if (size === "small") return '20px';
    if (size === "large") return '32px';
    return '26px';
  }

  const onChange = (e) => {
    setTextValue(e.target.value);
    onTextChanged(e.target.value);
  }

  return (
    <Container size={size} focused={focused} {...props}>
      {placeholder && <Label size={size} focused={labelState} htmlFor='123'>{placeholder}</Label>}
      {hasError && <div style={{position: 'absolute', right: '10px', top: '6px'}}>
        <ErrorOutlineIcon sx={{color: 'red', fontSize: getErrorSize()}} />      
      </div>}
      <InputObject size={size} focused={focused} id={123} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={onChange}></InputObject>
    </Container>
  );
};

TextInput.propTypes = {
  /**
   * boolean to show/hide progress icon
   */
  hasError: PropTypes.bool,
   /**
   * How large should the TextInput be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Optional click handler
   */
   onTextChanged: PropTypes.func,
};

TextInput.defaultProps = {
  hasError: false,
  size: 'medium',
  placeholder: "",
  onTextChanged: undefined,
};

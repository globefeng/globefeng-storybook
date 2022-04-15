import React, { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { string, arrayOf, shape, number, oneOf, func, bool } from 'prop-types';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: block;
  background-color: ${(props) => (props.disabled ? '#dadedf' : '#ffffff')};
  position: relative;
  border: ${(props) => {
    if (props.error) {
      return '2px solid #ff0000';
    }
    if (props.focus) {
      return '2px solid #3060AF';
    }
    return '2px solid #cacecf';
  }};
  border-radius: 6px;
  height: ${(props) => (props.size === 'small' ? '28px' : '40px')};
  outline: none;
`;

export const StyledSelectedText = styled.div`
  margin: ${(props) => (props.size === 'small' ? '10px 0px 4px 6px' : '16px 0px 4px 6px')};
  height: 21px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow-x: hidden;
  white-space: nowrap;
  font-family: Open Sans;
  font-size: ${(props) => (props.size === 'small' ? '14px' : '18px')};
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
`;

export const StyledSelectedContainer = styled.div`
  cursor: default;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLabel = styled.label`
  cursor: default;
  position: absolute;
  top: ${(props) => {
    if (props.size === 'small') {
      return props.selected ? '0px' : '10px';
    }
    return props.selected ? '0px' : '14px';
  }};
  left: 6px;
  font-family: Open Sans;
  font-size: ${(props) => {
    if (props.size === 'small') {
      return props.selected ? '9px' : '12px';
    }
    return props.selected ? '11px' : '14px';
  }};
  font-style: normal;
  font-weight: 400;
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
`;

export const StyledDropdown = styled.div`
  z-index: 100;
  background-color: #f8f8f8;
  border: 2px solid #cacecf;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0px;
  margin-top: 4px;
`;

export const StyledDropdownItem = styled.div`
  cursor: default;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.size === 'small' ? '14px' : '18px')};
  padding: 5px 20px 5px 10px;
  white-space: nowrap;
  &:hover {
    background-color: #1e90ff;
    color: #ffffff;
  }
`;

const NonSelectText = styled.span`
  -webkit-user-select: none;
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
`;

const Dropdown = (props) => {
  const { options, disabled, label, error, size, selected, onChanged, style } = props;

  const [state, setState] = useState({ visible: false, selectedItem: options[selected] });
  const { visible, selectedItem } = state;

  useEffect(() => {
    setState({visible: visible, selectedItem: options[selected]})
  }, [selected, options, visible]);

  const toggle = () => {
    if (!disabled) {
      setState({ ...state, visible: !visible });
    }
  };

  const SetSelectItem = (item) => {
    setState({ ...props, visible: false, selectedItem: item });
    if (onChanged) {
      onChanged(item.value);
    }
  };

  return (
    <StyledContainer
      style={style}
      size={size}
      disabled={disabled}
      error={error}
      focus={visible}
      tabIndex={0}
      onBlur={() => setState({ ...state, visible: false })}
    >
      <StyledLabel size={size} selected={selectedItem !== null} onClick={toggle}>
        {label}
      </StyledLabel>
      <StyledSelectedContainer onClick={toggle}>
        <StyledSelectedText size={size}>{selectedItem && <span>{selectedItem.text}</span>}</StyledSelectedText>
        <ArrowDropDownIcon
          style={{
            flexGrow: '0',
            flexShrink: '0',
            flexBasis: '20px',
            height: '20px',
            width: '20px',
            color: '#000000',
            margin: size === 'small' ? '0px 0px 5px 0px' : '4px 0px 5px 0px',
          }}
        />
      </StyledSelectedContainer>
      {visible && (
        <StyledDropdown>
          {options.map((item, index) => (
            <StyledDropdownItem size={size} onClick={() => SetSelectItem(item)} key={index}>
              <NonSelectText>{item.text}</NonSelectText>
            </StyledDropdownItem>
          ))}
        </StyledDropdown>
      )}
    </StyledContainer>
  );
};

Dropdown.defaultProps = {
  onChanged: null,
  selected: 0,
  size: 'normal',
  label: '',
  disabled: false,
  error: false,
  options: [],
};

Dropdown.propTypes = {
  onChanged: func,
  selected: number,
  size: oneOf(['small', 'normal']),
  label: string,
  disabled: bool,
  error: bool,
  options: arrayOf(
    shape({
      value: string,
      text: string,
    })
  ),
};

export default Dropdown;


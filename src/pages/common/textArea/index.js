import React, { useState } from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Flex, FlexRowSpaceBetween } from '../flex';
import styled from 'styled-components';

export const StyleInput = styled.input`
  background-color: white;
  border: 2px solid lightgrey;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  margin-top: 0.5rem;
  padding: 6px;

  &:focus,
  &:active {
    border: 2px solid #1E90FF;
    outline: none;
  }
`;

export const StyleTextArea = styled.textarea`
  background-color: white;
  border: 2px solid lightgrey;
  border-radius: 4px;
  font-size: 14px;
  font-style: normal;
  width: 96%;
  margin-top: 0.5rem;
  padding: 8px;
  resize: none;
  overflow-y: auto;

  &:focus,
  &:active {
    border: 2px solid #1E90FF;
    outline: none;
  }
`;

const TextArea = (props) => {
  const { name, type, label, errorMessage, minlength, maxlength, value } = props;
  const [textValue, setTextValue] = useState(value);

  return (
    <div style={{marginBottom:'10px'}}>
      <FlexRowSpaceBetween>
        <div>
          <label>{label}</label>
        </div>
        {errorMessage && 
          <div style={{ color: '#FF0000', display: 'flex', alignItems: 'center' }}>
            <ErrorOutlineIcon style={{width: '20px', height: '20px', marginRight: '4px'}} />
            {errorMessage}
          </div>}
      </FlexRowSpaceBetween>
      <Flex>
        <StyleTextArea
          type={type}
          name={name}
          minLength={minlength}
          maxLength={maxlength}
          value={textValue}
          rows={6}
          onChange={e => { setTextValue(e.target.value); props.onChange(e.target.value) }}
        />
      </Flex>
    </div>
    )
}

export default TextArea;
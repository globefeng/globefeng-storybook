import styled, { css } from 'styled-components';

export const Container = styled.div`
  border: ${({focused}) => ( focused ? "2px solid #0080ff;" : "1px solid #858585;" )}
  display: flex;
  color: black;
  flex-direction: column;
  height: ${({size}) => {
    if (size === 'small') return '24px;';
    if (size === 'large') return '36px;';
    return '30px;';
   }}
  position: relative;
  width: 100%;
  border-radius: 6px;
  padding: 4px;
`;

export const Label = styled.label`
  position: absolute;
  left: 6px;
  top: ${({size, focused}) => {
    if (size === 'small' && focused) return '0px;';
    if (size === 'small' && !focused) return '8px;';
    if (size === 'large' && focused) return '0px;';
    if (size === 'large' && !focused) return '12px;';
    return focused ? '0px;' : "10px;";
   }}
  font-size: ${({size, focused}) => {
    if (size === 'small' && focused) return '10px;';
    if (size === 'small' && !focused) return '14px;';
    if (size === 'large' && focused) return '14px;';
    if (size === 'large' && !focused) return '20px;';
    return focused ? '12px;' : "16px";
   }}
  transition: all 0.25s;
`;

export const InputObject = styled.input`
  flex: 1;
  height: ${({size}) => {
    if (size === 'small') return '20px;';
    if (size === 'large') return '40px;';
    return '30px;';
   }}
  padding: ${({size}) => {
    if (size === 'small') return '8px 4px 0px 2px;';
    if (size === 'large') return '14px 4px 0px 2px;';
    return '12px 4px 0px 2px;';
  }}
  font-size: ${({size}) => {
    if (size === 'small') return '12px;';
    if (size === 'large') return '20px;';
    return '16px;';
  }}
  border-width: 0px;
  border-style: solid;
  border-color: gray;
  &:focus {
    outline: none;
  }
`;

export const ErrorIcon = styled.input`
  flex: 1;
  height: ${({size}) => {
    if (size === 'small') return '20px;';
    if (size === 'large') return '40px;';
    return '30px;';
   }}
  padding: ${({size}) => {
    if (size === 'small') return '8px 4px 0px 2px;';
    if (size === 'large') return '14px 4px 0px 2px;';
    return '12px 4px 0px 2px;';
  }}
  font-size: ${({size}) => {
    if (size === 'small') return '12px;';
    if (size === 'large') return '20px;';
    return '16px;';
  }}
  border-width: 0px;
  border-style: solid;
  border-color: gray;
  &:focus {
    outline: none;
  }
`;
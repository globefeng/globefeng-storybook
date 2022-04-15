import React from "react";
import HomeIcon from './home.svg';
import styled, { keyframes } from 'styled-components'
import ThemeSwitch from '../theme/themeSwitch';
import FlexMobileContainer from '../common/flex/flexMobileContainer';
import FlexMobileNotShow from '../common/flex/flexMobileNotShow';
import { withTheme } from "styled-components";

const rotateAnimation = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
`
const RotateContainer = styled.div`
display: inline-block;
animation: ${rotateAnimation} 4s linear infinite;
`;

const HeaderContent = () => {
  return (
      <FlexMobileContainer style={{display: 'flex', minHeight: "100px", justifyContent:'space-between', alignItems:'center'}}>
          <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
              <RotateContainer>
                <img alt='' src={HomeIcon} width='36' height='36' />
              </RotateContainer>
              <span style={{marginLeft:'10px', marginRight:"2px", color: '#C85050', fontFamily: 'Impact', fontSize: '42px'}}>Feng Wang</span>
              <FlexMobileNotShow minWidth={1024}>
                <span style={{fontFamily: 'Impact', fontSize: '30px', color: '#666666', marginLeft:'30px', marginTop: '10px'}}>Full Stack Developer</span>
              </FlexMobileNotShow>
          </div>
          <FlexMobileNotShow minWidth={512}>
            <ThemeSwitch />
          </FlexMobileNotShow>
      </FlexMobileContainer>
  );
}

export default withTheme(HeaderContent);
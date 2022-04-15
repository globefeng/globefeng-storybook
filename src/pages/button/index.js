import React, { useEffect } from 'react';
import FlexMobileContainer from '../common/flex/flexMobileContainer';
import { DoScroll } from '../../helper/winHelper';
import { withTheme } from 'styled-components';
import { Button } from '../../components/button/Button';
import { string, shape, node, any } from 'prop-types';

const Section = (props) => {
  const {style, children} = props;
  const { backgroundColor, color } = style;
  return (
    <div {...props} style={{width: '100%', backgroundColor, color}}>
      <FlexMobileContainer>
        {children}
      </FlexMobileContainer>
    </div>
  )
}

Section.propTypes = {
  style: shape({backgroundColor: string, color: string}).isRequired,
  children: node.isRequired,
  theme: any,
}

const ButtonPage = ({theme}) => {
  useEffect(() => {
    DoScroll();
  }, []);
  
  return (
    <Section style={{backgroundColor: theme.home.background1, color: theme.home.color}}> 
      <div style={{display: 'flex', padding: '40px 0px', marginBottom: "20px"}}>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#1976d2" size="large" />
          </div>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#2e7d32" size="large" />
          </div>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#9c27b0" size="large" />
          </div>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#d32f2f" size="large" />
          </div>
      </div>

      <div style={{display: 'flex', padding: '40px 0px', marginBottom: "20px"}}>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#1976d2" size="medium" />
          </div>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#2e7d32" size="medium" />
          </div>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#9c27b0" size="medium" />
          </div>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#d32f2f" size="medium" />
          </div>
      </div>

      <div style={{display: 'flex', padding: '40px 0px', marginBottom: "20px"}}>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#1976d2" size="small" />
          </div>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#2e7d32" size="small" />
          </div>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#9c27b0" size="small" />
          </div>
          <div style={{marginRight: "20px"}}>
            <Button label="Button" showIcon={true} backgroundColor="#d32f2f" size="small" />
          </div>
      </div>
    </Section>
  )
}

ButtonPage.propTypes = {
  theme: any
}

export default withTheme(ButtonPage);
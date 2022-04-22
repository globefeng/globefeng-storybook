import React, { useEffect } from 'react';
import FlexMobileContainer from '../common/flex/flexMobileContainer';
import { DoScroll } from '../../helper/winHelper';
import { withTheme } from 'styled-components';
import { Button } from '../../components/button/Button';
import { string, shape, node, any } from 'prop-types';
import { Rotation } from '../../components/rotation/index';

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

const RotationPage = ({theme}) => {
  useEffect(() => {
    DoScroll();
  }, []);
  
  return (
    <Section style={{backgroundColor: theme.home.background1, color: theme.home.color}}> 
      <div style={{display: 'flex', padding: '100px 0px', marginBottom: "20px"}}>
          <div style={{marginRight: "20px"}}>
            <Rotation speed="1s">
              <Button label="Button" showIcon={true} backgroundColor="#1976d2" size="large" />
            </Rotation>
          </div>
          <div style={{marginRight: "20px"}}>
            <Rotation>
              <h2>Hello</h2>
            </Rotation>
          </div>
          <div style={{marginRight: "20px"}}>
            <Rotation>
              <div style={{backgroundColor: 'lightblue', border: '2px solid red'}}>
                <h2>Div element</h2>
                <p>This element is rotating</p>
              </div>
            </Rotation>
          </div>
          <div style={{marginRight: "20px"}}>
            <Rotation>
              <img src="https://www.amnh.org/var/ezflow_site/storage/images/media/amnh/images/explore/ology-images/earth/what-s-the-big-idea-about-earth/earth-icon/4690373-1-eng-US/earth-icon.png" style={{width:'100px', height:'100px'}} />
            </Rotation>
          </div>
      </div>

    </Section>
  )
}

RotationPage.propTypes = {
  theme: any
}

export default withTheme(RotationPage);
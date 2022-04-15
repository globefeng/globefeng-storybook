import React, { useEffect } from 'react';
import FlexMobileContainer from '../common/flex/flexMobileContainer';
import { DoScroll } from '../../helper/winHelper';
import { withTheme } from 'styled-components';
import { string, shape, node, any } from 'prop-types';

const Section = (props) => {
  const {style, children} = props;
  const { backgroundColor, color } = style;
  return (
    <div {...props} style={{width: '100%', backgroundColor, color, minHeight: '600px'}}>
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

const Home = (props) => {
  useEffect(() => {
    DoScroll();
  }, []);
  
  return (
    <div>
      <Section style={{backgroundColor: props.theme.home.background1, color: props.theme.home.color}}> 
        <div style={{display: 'flex', padding: '40px 0px'}}>
          <div style={{flexGrow: '1', marginLeft: '20px'}}>
            <h2>Summary</h2>
            <p style={{fontSize: '20px'}}>A software engineer and architect with over 15 years of professional expertise solving challenging business problems.</p>
            <ul style={{lineHeight:'180%', fontSize: '18px'}}>
              <li>Experience in mentoring individuals, architecting, and developing successful large-scale projects from conception to completion.</li>
              <li>.NET, Web, and SQL Server expert with passion in working with the latest Microsoft Technologies.</li>
              <li>Highly proficient in developing windows and web front-end/back-end application with C++, C#, WPF, ASP.NET, ASP.NET Core, SQL Server, React and Angular.</li>
              <li>Expert in advanced development methodologies, tools, and processes contributing to the design and deployment of cutting-edge software applications.</li>
              <li>Highly analytical with superb time management, collaboration, and problem-solving skills.</li>
            </ul>  
          </div>
        </div>
      </Section>


    </div>
  )
}

Home.propTypes = {
  theme: any
}
export default withTheme(Home);
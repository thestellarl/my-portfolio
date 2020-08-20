import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { NavigationBar } from './components/NavigationBar';

import DownArrow from './down_arrow.svg'
import { FloaterBackground } from './components/Boids';
import { Paper } from './components/Paper';
import { Carousel } from './components/Carousel';
import { ViewportProvider, useViewport } from './utilities/window-resize';

// const getScrollPosition = (element: React.RefObject<HTMLDivElement>) => {
//   const target = element.current;
//   const position = target!.getBoundingClientRect()

//   return { y: position.top }
// }

// export function useScrollPosition(element: React.RefObject<HTMLDivElement>, effect: any,  deps: any[]) {
//   const position = React.useRef(getScrollPosition(element))
  
//   const callBack = () => {
//     effect( window.pageYOffset )
//   }

//   React.useEffect(() => {
//     const handleScroll = () => {
//         callBack()
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, deps)
// }

function App() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const appRef = React.createRef<HTMLDivElement>();

  console.log(scrollPosition);

  const navigationMap = {
    Home: '/#home',
    About: '/#about',
    Resume: '/#resume',
    Projects: '/#projects',
    Contact: '/#contact',
  };
  

  return (
    <ViewportProvider>
      <div className="App" ref={appRef}>
      <ThemeProvider theme={colorTheme}>
        <NavigationBar navLinks={navigationMap}/>
        <PageSection id={'home'} color={'#ffffff'} >
          <FloaterBackground />
          <div style={{textShadow: '0 2px 5px rgba(33,33,33,.5)'}}>
            <h1 style={{fontSize: '6em'}}>
              Hey there I'm Lucas!
            </h1>
            <SubTitle>
              I am a <b>software developer</b>, <b>avid tinkerer</b> and a <b>dedicated problem solver</b>.
            </SubTitle>
            <SubTitle>
              Scroll to learn more about me!
            </SubTitle>
          </div>
        </PageSection>
        <PageSection id={'about'}>
          <h2>
            ABOUT
          </h2>
        </PageSection>
        <PageSection id={'resume'}>
          <h2>
            RESUME
          </h2>
        </PageSection>
        <PageSection id={'projects'}>
          <Carousel>
            <h2>
              Electric Longboard
            </h2>
            <h2>
              Electric Longboard
            </h2>
            <h2>
              Electric Longboard
            </h2>
          </Carousel>
        </PageSection>
        <PageSection id={'contact'}>
          <h2>
            CONTACT
          </h2>
        </PageSection>        
      </ThemeProvider>
      </div>
    </ViewportProvider>
  );
}

export default App;

export const colorTheme = {
  primaryColor: '#5F7470',
  secondaryColor: '#889696',
  background: '#ffffff',
  headerColor: '#335C67',
}

const DownArrowWrapper = styled.img`
  position: absolute;
  bottom: 50px;
  cursor: pointer;
`;

const UpArrowWrapper = styled.img`
  position: absolute;
  top: 50px;
  cursor: pointer;
  transform: rotate(180deg);
`;

const SubTitle = styled.p`
  font-size: 2em;
`; 

interface PageSectionProps{
  color?: string;
  backgroundColor?: string;
}

const PageSection = styled.section<PageSectionProps>`
  position: relative;
  background-color: ${({ theme }) => theme.background};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-x: hidden;
  color: ${({color}) => color || '#000000'};
`;
import React, { useRef, useEffect, useLayoutEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider, keyframes, ThemeContext } from 'styled-components';
import { NavigationBar } from './components/NavigationBar';
import DownArrow from './down_arrow.svg'
import { FloaterBackground } from './components/Boids';
import { Paper } from './components/Paper';
import { Carousel } from './components/Carousel';
import { ViewportProvider, useViewport } from './utilities/window-resize';
import { FeatureGrid } from './components/FeatureGrid';
import { FeatureItem } from './components/FeatureGrid/components/featureItem';
import { GifPlayer } from './components/GifPlayer';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GithubIcon } from './icons/GithubIcon';
import { ImageItem } from './components/ImageItem';
import { Button } from './components/Button';

function getScrollPosition( element?: React.RefObject<HTMLDivElement>) {
  const target = element ? element.current : document.body;
  
  return target ? target.scrollTop : 0;
}

export function useScrollPosition(effect: any, deps: any[], element: React.RefObject<HTMLDivElement>, wait: number) {
  const position = useRef(getScrollPosition(element));
  let throttleTimeout: any = null;

  const callBack = () => {
    const currPos = getScrollPosition(element);
    effect(currPos);
    position.current = currPos;
    throttleTimeout = null;
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    }
    element.current!.addEventListener('scroll', handleScroll)

    return () => element.current!.removeEventListener('scroll', handleScroll)
  }, deps)
}

const ScrollContext = React.createContext(0);

function App() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  
  const appRef = React.useRef<HTMLDivElement>(null);
  
  useScrollPosition((currPos: number) => {
    setScrollPosition(currPos);
  }, [scrollPosition], appRef, 100);

  const navigationMap = {
    Home: '/#home',
    About: '/#about',
    Projects: '/#projects',
    Contact: 'mailto:stellal@oregonstate.edu',
  };
  

  return (
    <ViewportProvider>
      <ScrollContext.Provider value={scrollPosition}>
        <div className="App" ref={appRef}>
        <ThemeProvider theme={colorTheme}>
          <NavigationBar scrollPosition={scrollPosition} closed={false} navLinks={navigationMap}>
            <a target='_blank' href='https://www.linkedin.com/in/lucas-stella-28700615a/'>
              <LinkedInIcon primaryColor={'white'}/>
            </a>
            <a target='_blank' href='https://github.com/thestellarl'>
              <GithubIcon primaryColor={'white'}/>
            </a>
          </NavigationBar>

          <PageSection id='home' color='#ffffff' height='100vh' >
            <FloaterBackground />
            <GreetingWrapper>
              <h1 style={{fontSize: '6em'}}>
                Hey there, I'm Lucas!
              </h1>
              <SubTitle>
                I am a <b>software developer</b>, <b>avid tinkerer</b> and a <b>dedicated problem solver</b>.
              </SubTitle>
              <SubTitle>
                Scroll to learn more about me!
              </SubTitle>
            </GreetingWrapper>
          </PageSection>
          
          <PageSection color='white' height='25vh' id='about'>
            <div style={{width: '75%'}}>
              <h3>I've got a good amount of experience in a number of different languages and will be graduating from Oregon State University in 2021 with a degree in Computer Science with a focus on Artificial Intelligence.</h3>
              <h1>If you're looking for more details or would like a resume, checkout my LinkedIn or <CustomLink href='mailto:stellal@oregonstate.edu'>send me an email</CustomLink></h1>
            </div>
          </PageSection>
                    
          <PageSection height='40vh'>
            <BackgroundDiv backgroundColor='#D64933'>
              <h1 style={{fontFamily: 'BeVietnam-Regular'}}>Experience</h1>
              <ListContainer>
                <li>TypeScript</li>
                <li>ReactJS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>C</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Git</li>
                <li>Java</li>
              </ListContainer>
            </BackgroundDiv>
          </PageSection>

          <PageSection height='min-content' color='white'>
            <h1>Past Work</h1>
            <FlexContainer>
              <ContainerItem>
                <ImageItem height={200} src='bd_logo.png'>
                  <h1 style={{marginBottom: '5px'}}>Software Intern</h1>
                  <h5 style={{marginTop: '0px'}}>June 2019 - Sept 2020</h5>
                  <h4>Front-End Development with ReactJS</h4>
                </ImageItem>
              </ContainerItem>
              <ContainerItem>
                <ImageItem height={200} src='osu_logo.jpg'>
                  <h1 style={{marginBottom: '5px'}}>Computer Graphics Intern</h1>
                  <h5 style={{marginTop: '0px'}}>June 2016 - Sept 2016</h5>
                  <h4>Computer graphics programming using C++ and OpenGL</h4>
                </ImageItem>
              </ContainerItem>
            </FlexContainer>
          </PageSection> 

          <PageSection height='min-content' color='white' id='projects'>
            <h1>Projects</h1>
            <FlexContainer>
              <ContainerItem>
                <ImageItem height={200} src='recipro.png'>
                  <h4>Website built using NodeJS that utilized an SQL database</h4>
                  <Button href='https://github.com/lpstella/recipro'>Visit</Button>
                </ImageItem>
              </ContainerItem>
              <ContainerItem>
                <ImageItem height={200} src='mypage.png'>
                  <h4>This Website! Built using ReactJS. Still in development...</h4>
                  <Button href='https://lstelladev.com'>Visit</Button>
                </ImageItem>
              </ContainerItem>
              
              <ContainerItem>
                <ImageItem height={200} src='drone_gold_still.png'>
                  <h4>Drone Videography. I build and fly drones and sometimes I film stuff</h4>
                  <Button href='https://www.instagram.com/p/CEXPzvzp5P_/'>View</Button>
                </ImageItem>
              </ContainerItem>
            </FlexContainer>
            <h1>Check out my <CustomLink target='_blank' href='https://github.com/thestellarl'>GitHub</CustomLink> for more</h1>
          </PageSection>

          <PageSection height='40vh' color='white'>
            <h1>Think I'd be a good fit for your team? Reach out!</h1>
            <Button href='mailto:stellal@oregonstate.edu'>Contact Me!</Button>
          </PageSection>
        </ThemeProvider>
        </div>
      </ScrollContext.Provider>
    </ViewportProvider>
  );
}

export default App;

export const colorTheme = {
  primaryColor: '#5F7470',
  secondaryColor: '#889696',
  background: '#2A9D8F',
  headerColor: '#335C67',
}

const CustomLink = styled.a`
  text-decoration: none;
  color: #264653;
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
`;

const ContainerItem = styled.div`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  min-width: min-content;
  overflow: hidden;
  flex: 0 1 auto;
  flex-direction: column;
  border-radius: 16px;
  margin: 15px 15px;
  margin-bottom: 25px;
  height: 100%;
  border-radius: 14px;
  background: #2A9D8F;
  box-shadow:  9px 9px 18px #24857a, 
             -9px -9px 18px #30b5a4;
`;

const ListContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  font-size: 2.5em;
  font-weight: bold;
  text-shadow: 0 2px 5px rgba(33,33,33,.5);
  justify-content: space-around;
  > * {
    margin: 0 25px;
    transition: all 0.2s ease-in-out;
    :hover{
      transform: scale(1.5);
      text-shadow: 0 10px 5px rgba(33,33,33,.5);
    }
  }
`;

const BackgroundDiv = styled.div<{ backgroundColor: string }>`
  padding: 20px;
  border-radius: 16px;
  z-index: -1;
  left: 0;
  background: #2A9D8F;
  box-shadow:  20px 20px 60px #24857a, 
             -20px -20px 60px #30b5a4;
  color: white;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    top: 20px;
    text-shadow: 0 0px 5px rgba(33,33,33,.5);
  }
  to {
    opacity: 1;
    top: 0px;
    text-shadow: 0 10px 5px rgba(33,33,33,.5);
  }
`;

const GreetingWrapper = styled.div`
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out 0.5s forwards;
`;

const SubTitle = styled.p`
  font-size: 2em;
`; 

interface PageSectionProps{
  color?: string;
  backgroundColor?: string;
  height?: string | number;
}

const PageSection = styled.section<PageSectionProps>`
  display: flex;
  font-family: BeVietnam-Regular;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.background};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ height }) => (typeof height === 'number' ? height + `px` : height) || 'min-content'};
  overflow-x: hidden;
  color: ${({color}) => color || '#000000'};
`;
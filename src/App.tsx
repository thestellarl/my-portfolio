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
import { ScrollController } from './components/ScrollController';
import PageSection from './components/PageSection';
import CustomLink from './components/StyledLink';
import ProfileCard from './components/Cards/Intro';
import ExperienceCard from './components/Cards/Experience';

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

function App() {
  // const scrollPosition = React.useRef(0);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const appRef = React.useRef<HTMLDivElement>(null);

  // useScrollPosition((currPos: number) => {
  //     scrollPosition.current = currPos;
  // }, [scrollPosition.current], appRef, 100);
  useScrollPosition((currPos: number) => {
    setScrollPosition(currPos);
  }, [scrollPosition], appRef, 100);

  // useEffect(() => {
  //   console.log(scrollPosition.current);
  // }, [scrollPosition.current]);

  const navigationMap = {
    Home: '/#home',
    About: '/#about',
    Projects: '/#projects',
    Contact: 'mailto:stellal@oregonstate.edu',
  };
  

  return (
    <ViewportProvider>
        <div className="App" ref={appRef}>
        <ThemeProvider theme={colorTheme}>
          <NavigationBar scrollPosition={scrollPosition} closed={false} navLinks={navigationMap}>
            <a target='_blank' href='https://www.linkedin.com/in/lucas-stella-28700615a/'>
              <LinkedInIcon />
            </a>
            <a target='_blank' href='https://github.com/thestellarl'>
              <GithubIcon />
            </a>
          </NavigationBar>

          <PageSection id='home' color='#ffffff' height='100vh' >
            <FloaterBackground />
            <GreetingWrapper style={{pointerEvents: "none"}}>
              <h1 style={{fontSize: '6vw'}}>
                Hey there, I'm Lucas!
              </h1>
              <SubTitle style={{fontSize: '2vw'}}>
                I am a <b>software developer</b>, <b>avid tinkerer</b> and a <b>dedicated problem solver</b>.
              </SubTitle>
              <SubTitle style={{fontSize: '2vw'}}>
                Scroll to learn more about me!
              </SubTitle>
            </GreetingWrapper>
          </PageSection>
          
          <PageContents>
            <ProfileCard />
            <ExperienceCard />

            <PageSection height='min-content'>
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

            <PageSection height='min-content' id='projects'>
              <h1>Projects</h1>
              <FlexContainer>
                <ContainerItem>
                  <ImageItem height={200} src='recipro_cropped.png'>
                    <h4>Website built using NodeJS that utilized an SQL database</h4>
                    <Button href='https://github.com/lpstella/recipro'>Visit</Button>
                  </ImageItem>
                </ContainerItem>
                <ContainerItem>
                  <ImageItem height={200} src='cs446_final.png'>
                    <h4>Protein residue interaction network analysis</h4>
                    <Button href='https://github.com/picodase/cs446_final'>Visit</Button>
                  </ImageItem>
                </ContainerItem>
                <ContainerItem>
                  <ImageItem height={200} src='mypage_cropped.png'>
                    <h4>This Website! Built using ReactJS. Still in development...</h4>
                    <Button href='https://lstelladev.com'>Visit</Button>
                  </ImageItem>
                </ContainerItem>
                
                <ContainerItem>
                  <ImageItem height={200} src='drone_gold_still_cropped.png'>
                    <h4>Drone Videography. I build and fly drones and sometimes I film stuff</h4>
                    <Button href='https://www.instagram.com/p/CEXPzvzp5P_/'>View</Button>
                  </ImageItem>
                </ContainerItem>
              </FlexContainer>
              <h1>Check out my <CustomLink target='_blank' href='https://github.com/thestellarl'>GitHub</CustomLink> for more</h1>
            </PageSection>

            <PageSection height='min-content'>
              <h1>Think I'd be a good fit for your team? Reach out!</h1>
              <Button href='mailto:stellal@oregonstate.edu'>Contact Me!</Button>
            </PageSection>
          </PageContents>
        </ThemeProvider>
        </div>
    </ViewportProvider>
  );
}

export default App;

export const colorTheme = {
  primaryColor: '#5F7470',
  secondaryColor: '#889696',
  background: '#26465320',
  headerColor: '#a4161a',
}

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

const PageContents = styled.div`
  color: #264653;
  &>*{
    padding: 2.5% 0%;
    margin: 2.5% 0%;
  }
  >:nth-child(even){
    clip-path: polygon(0% 0%, 100% 5%, 100% 95%, 0% 100%);
  }
  >:nth-child(odd){
    clip-path: polygon(0% 5%, 100% 0%, 100% 100%, 0% 95%);
  }
  >:first-child{
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 95%);
    margin-top: 0;
  }
  >:last-child{
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    margin-bottom: 0;
  }
`;
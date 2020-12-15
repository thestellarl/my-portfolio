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

function App() {
  const appRef = React.useRef<HTMLDivElement>(null);

  const navigationMap = {
    Home: '/#home',
    About: '/#about',
    Projects: '/#projects',
    Contact: 'mailto:stellal@oregonstate.edu',
  };
  

  return (
    <ViewportProvider>
        <div className="App" ref={appRef}>
        {/* <ScrollController appRef={appRef}/> */}
        <ThemeProvider theme={colorTheme}>
          <NavigationBar scrollPosition={0} closed={false} navLinks={navigationMap}>
            <a target='_blank' href='https://www.linkedin.com/in/lucas-stella-28700615a/'>
              <LinkedInIcon primaryColor={'#000000'}/>
            </a>
            <a target='_blank' href='https://github.com/thestellarl'>
              <GithubIcon primaryColor={'#000000'}/>
            </a>
          </NavigationBar>

          <PageSection id='home' color='#ffffff' height='100vh' >
            <FloaterBackground />
            <GreetingWrapper style={{pointerEvents: "none"}}>
              <h1 style={{fontSize: '4em'}}>
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

            <PageSection color='#ffffff' height='25vh' id='about'>
              <div style={{width: '75%'}}>
                <h3>I've got experience in a number of different languages and will be graduating from Oregon State University in 2021 with a degree in Computer Science with a focus on Artificial Intelligence.</h3>
                <h1>If you're looking for more details or would like a resume, checkout my LinkedIn or send me <CustomLink href='mailto:stellal@oregonstate.edu'>an email</CustomLink></h1>
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

            <PageSection height='min-content' color='#023e8a'>
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

            <PageSection height='min-content' color='#023e8a' id='projects'>
              <h1>Projects</h1>
              <FlexContainer>
                <ContainerItem>
                  <ImageItem height={200} src='recipro_cropped.png'>
                    <h4>Website built using NodeJS that utilized an SQL database</h4>
                    <Button href='https://github.com/lpstella/recipro'>Visit</Button>
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

            <PageSection height='40vh' color='#023e8a'>
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

const CustomLink = styled.a`
  text-decoration: underline;
  color: #2a9d8f;
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
  // background: #a4161a;
  // box-shadow:  20px 20px 60px #a4161a, 
  //            -20px -20px 60px #ba181b;
  color: #023e8a;
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
  tapered?: number;
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

const PageContents = styled.div`
  &>*{
    padding: 5% 0%;
    margin: 5% 0%;
  }
  >:nth-child(even){
    clip-path: polygon(0% 0%, 100% 5%, 100% 95%, 0% 100%);
  }
  >:nth-child(odd){
    clip-path: polygon(0% 5%, 100% 0%, 100% 100%, 0% 95%);
  }
`;
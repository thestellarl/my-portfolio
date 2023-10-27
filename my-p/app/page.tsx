"use client";

import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavigationBar } from "../components/NavigationBar";
import DownArrow from "../down_arrow.svg";
import { FloaterBackground } from "../components/Boids";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { ImageItem } from "../components/ImageItem";
import { Button } from "../components/Button";
import PageSection from "../components/PageSection";
import CustomLink from "../components/StyledLink";
import ProfileCard from "../components/Cards/Intro";
import ExperienceCard from "../components/Cards/Experience";
import ScrollIcon from "../icons/ScrollIcon";
import Footer from "@/components/Footer";
import LandingScreen from "@/components/Hero";
import Image from "next/image";

function getScrollPosition(element?: React.RefObject<HTMLDivElement>) {
  const target = element ? element.current : document.body;

  return target ? target.scrollTop : 0;
}

export function useScrollPosition(
  effect: any,
  deps: any[],
  element: React.RefObject<HTMLDivElement>,
  wait: number
) {
  // const position = useRef(getScrollPosition(element));
  let throttleTimeout: any = null;

  const callBack = () => {
    const currPos = getScrollPosition(element);
    effect(currPos);
    // position.current = currPos;
    throttleTimeout = null;
  };

  //   useLayoutEffect(() => {
  //     const handleScroll = () => {
  //       if (wait) {
  //         if (throttleTimeout === null) {
  //           throttleTimeout = setTimeout(callBack, wait);
  //         }
  //       } else {
  //         callBack();
  //       }
  //     };
  //     element.current!.addEventListener("scroll", handleScroll);

  //     return () => element.current!.removeEventListener("scroll", handleScroll);
  //   }, deps);
}

function App(): React.ReactNode {
  // const scrollPosition = React.useRef(0);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const appRef = React.useRef<HTMLDivElement>(null);

  useScrollPosition(
    (currPos: number) => {
      setScrollPosition(currPos);
    },
    [scrollPosition],
    appRef,
    100
  );

  const navigationMap = {
    Home: "/#home",
    About: "/#about",
    Projects: "/#projects",
    Contact: "mailto:stellal@oregonstate.edu",
  };

  // <PageSection id="home">
  //       {/* <FloaterBackground /> */}
  //       <div className="relative text-white" style={{ pointerEvents: "none" }}>
  //         <h1 style={{ fontSize: "6vmax" }}>Hey there, I'm Lucas!</h1>
  //         <div className="text-2xl" style={{ fontSize: "2vmax" }}>
  //           I am a <b>software developer</b>, <b>avid tinkerer</b> and a{" "}
  //           <b>dedicated problem solver</b>.
  //         </div>
  //         <div className="text-2xl" style={{ fontSize: "2vmax" }}>
  //           Scroll to learn more about me!
  //         </div>
  //       </div>
  //       <ScrollIcon />
  //     </PageSection>

  return (
    <div
      className="App"
      ref={appRef}
      style={{ fontFamily: "BeVietnam-Regular" }}
    >
      <section className="main-page-container relative flex items-center justify-center h-screen w-screen whitespace-nowrap">
        <div className="flex flex-col name-card glass absolute left-0 py-8 justify-center">
          {/* <div className="flex text-9xl font-semibold w-1/2 text-right mx-8 whitespace-normal">
            Lucas Stella
          </div>
          <div className="flex text-4xl font-semibold tracking-widest text-right mx-8">
            Software Engineer
          </div> */}
          <div className="flex font-semibold w-1/2 text-left mx-8 whitespace-nowrap text-white font-sans">
            <LandingScreen />
          </div>
        </div>
      </section>

      <section className="text-dark1 bg-light1 relative flex flex-col items-center justify-center sm:text-4xl xl:text-6xl font-semibold w-screen h-1/2 select-none">
        Skills
        <div className="flex carousel w-screen justify-around mt-12 flex-wrap">
          <a className="m-5">ReactTS</a>
          <a className="m-5">C++</a>
          <a className="m-5">UI/UX</a>
          <a className="m-5">CI/CD</a>
          <a className="m-5">Git</a>
          <a className="m-5">Agile Practices</a>
          <a className="m-5">OOP</a>
        </div>
      </section>

      <section
        id="sectionPin"
        className="relative flex w-screen h-1/2 select-none bg-black"
      >
        <div className="pin-wrap-sticky bg-light1">
          <div className="pin-wrap flex justify-center items-center justify-around">
            <div className="rounded w-96 h-96 bg-white relative">
              <Image src="/recipro_cropped.png" fill alt="recipro screenshot" />
            </div>
            <div className="rounded w-96 h-96 bg-white"></div>
            <div className="rounded w-96 h-96 bg-white"></div>
            <div className="rounded w-96 h-96 bg-white"></div>
            <div className="rounded w-96 h-96 bg-white"></div>
            <div className="rounded w-96 h-96 bg-white"></div>
            <div className="rounded w-96 h-96 bg-white"></div>
          </div>
        </div>
      </section>

      <div className="relative flex flex-col justify-center w-screen h-screen text-6xl">
        <Footer />
      </div>

      {/* <NavigationBar
        scrollPosition={scrollPosition}
        closed={false}
        navLinks={navigationMap}
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lucas-stella-28700615a/"
        >
          <LinkedInIcon />
        </a>
        <a target="_blank" href="https://github.com/thestellarl">
          <GithubIcon />
        </a>
      </NavigationBar> */}

      {/* <div className="page-contents" style={{ color: "#264653" }}>
        <ProfileCard />
        <ExperienceCard />

        <PageSection>
          <h1>Past Work</h1>
          <div className="relative flex flex-wrap .w-10/12 .justify-center">
            <div className="flex w-min overflow-hidden flex-initial flex-col rounded m-4 mb-5 h-full">
              <ImageItem height={200} src="bd_logo2.png">
                <h1 style={{ marginBottom: "5px" }}>Software Intern</h1>
                <h5 style={{ marginTop: "0px" }}>June 2019 - Sept 2020</h5>
                <h4>Front-End Development with ReactJS</h4>
              </ImageItem>
            </div>
            <div className="flex w-min overflow-hidden flex-initial flex-col rounded m-4 mb-5 h-full">
              <ImageItem height={200} src="osu_logo2.jpg">
                <h1 style={{ marginBottom: "5px" }}>
                  Computer Graphics Intern
                </h1>
                <h5 style={{ marginTop: "0px" }}>June 2016 - Sept 2016</h5>
                <h4>Computer graphics programming using C++ and OpenGL</h4>
              </ImageItem>
            </div>
          </div>
        </PageSection>

        <PageSection id="projects">
          <h1>Projects</h1>
          <div className="relative flex flex-wrap .w-10/12 .justify-center">
            <div className="flex w-min overflow-hidden flex-initial flex-col rounded m-4 mb-5 h-full">
              <ImageItem height={200} src="recipro_cropped.png">
                <h4>
                  Website built using NodeJS that utilized an SQL database
                </h4>
                <Button href="https://github.com/lpstella/recipro">
                  Visit
                </Button>
              </ImageItem>
            </div>
            <div className="flex w-min overflow-hidden flex-initial flex-col rounded m-4 mb-5 h-full">
              <ImageItem height={200} src="final_446.png">
                <h4>Protein residue interaction network analysis</h4>
                <Button href="https://github.com/picodase/cs446_final">
                  Visit
                </Button>
              </ImageItem>
            </div>
            <div className="flex w-min overflow-hidden flex-initial flex-col rounded m-4 mb-5 h-full">
              <ImageItem height={200} src="mypage_cropped.png">
                <h4>
                  This Website! Built using ReactJS. Still in development...
                </h4>
                <Button href="https://lstelladev.com">Visit</Button>
              </ImageItem>
            </div>

            <div className="flex w-min overflow-hidden flex-initial flex-col rounded m-4 mb-5 h-full">
              <ImageItem height={200} src="drone_gold_still_cropped.png">
                <h4>
                  Drone Videography. I build and fly drones and sometimes I film
                  stuff
                </h4>
                <Button href="https://www.instagram.com/p/CEXPzvzp5P_/">
                  View
                </Button>
              </ImageItem>
            </div>

            <div className="flex w-min overflow-hidden flex-initial flex-col rounded m-4 mb-5 h-full">
              <ImageItem height={200} src="light_bar.jpg">
                <h4>
                  Built a mobile controlled LED display utilizing the ESP8266
                </h4>
                <Button disabled>Repo coming soon</Button>
              </ImageItem>
            </div>

            <div className="flex w-min overflow-hidden flex-initial flex-col rounded m-4 mb-5 h-full">
              <ImageItem height={200} src="drone.png">
                <h4>
                  Designed a Drone based system to improve the situal awareness
                  of Airborn Wildfire Fighting efforts
                </h4>
                <Button href="https://eecs.oregonstate.edu/project-showcase/projects/?id=HhhD4OZfTfbfwfKg">
                  View
                </Button>
              </ImageItem>
            </div>
          </div>
          <h1>
            Check out my{" "}
            <CustomLink target="_blank" href="https://github.com/thestellarl">
              GitHub
            </CustomLink>{" "}
            for more
          </h1>
        </PageSection>

        <PageSection>
          <h1>Think I'd be a good fit for your team? Reach out!</h1>
          <Button href="mailto:stellal@oregonstate.edu">Contact Me!</Button>
        </PageSection>
      </div> */}
    </div>
  );
}

export default App;

export const colorTheme = {
  primaryColor: "#5F7470",
  secondaryColor: "#889696",
  background: "#26465320",
  headerColor: "#a4161a",
};

// const FlexContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-wrap: wrap;
//   width: 80%;
//   justify-content: center;
// `;

// const ContainerItem = styled.div`
//   background-color: ${({ theme }) => theme.background};
//   display: flex;
//   min-width: min-content;
//   overflow: hidden;
//   flex: 0 1 auto;
//   flex-direction: column;
//   border-radius: 16px;
//   margin: 15px 15px;
//   margin-bottom: 25px;
//   height: 100%;
//   border-radius: 14px;
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     top: 20px;
//     text-shadow: 0 0px 5px rgba(33,33,33,.5);
//   }
//   to {
//     opacity: 1;
//     top: 0px;
//     text-shadow: 0 10px 5px rgba(33,33,33,.5);
//   }
// `;

// const GreetingWrapper = styled.div`
//   position: relative;
//   opacity: 0;
//   animation: ${fadeIn} 1.5s ease-in-out 0.5s forwards;
// `;

// const SubTitle = styled.p`
//   font-size: 2em;
// `;

// const PageContents = styled.div`
//   color: #264653;
//   & > * {
//     @media (max-width: 800px) {
//       padding: 10% 0%;
//     }
//     padding: 2.5% 0%;
//     margin: 2.5% 0%;
//   }
//   > :nth-child(even) {
//     clip-path: polygon(0% 0%, 100% 5%, 100% 95%, 0% 100%);
//   }

//   > :nth-child(odd) {
//     clip-path: polygon(0% 5%, 100% 0%, 100% 100%, 0% 95%);
//   }

//   > :first-child {
//     clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 95%);
//     margin-top: 0;
//   }
//   > :last-child {
//     clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
//     margin-bottom: 0;
//   }
// `;

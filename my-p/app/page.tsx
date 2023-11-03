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
import ScrollIcon from "../icons/ScrollIcon";
import Footer from "@/components/Footer";
import LandingScreen from "@/components/Hero";
import Image from "next/image";
import ExperienceCard from "@/components/ExperienceCard";
import BackgroundGradient from "@/components/Background";

function App(): React.ReactNode {
  const appRef = React.useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

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
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
    >
      <div className="absolute h-9 flex space-x-8 bottom-6 z-10 fill-white max-w-screen-xl w-full md:px-12 md:py-20 lg:px-24 mx-auto">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lucas-stella-28700615a/"
        >
          <LinkedInIcon dim={36} />
        </a>
        <a target="_blank" href="https://github.com/thestellarl">
          <GithubIcon dim={36} />
        </a>
      </div>
      <BackgroundGradient mousePosition={mousePosition} />
      <section className="relative flex items-center justify-center h-screen w-screen whitespace-nowrap">
        <div className="flex flex-col name-card glass absolute left-0 py-8 justify-center">
          <div className="flex font-semibold w-1/2 text-left mx-8 whitespace-nowrap text-white font-sans">
            <LandingScreen />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center w-screen relative">
        <div className="max-w-screen-xl w-full md:px-12 md:py-20 lg:px-24 mx-auto">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  <a href="/">Lucas Stella</a>
                </h1>
              </div>
            </header>
            <div className="pt-24 lg:w-1/2 lg:py-24">
              <section>
                <ol className="group/list">
                  <li className="mb-12">
                    <ExperienceCard
                      startDate="2021"
                      endDate="present"
                      company="Intel"
                      position="Development Tools Engineer"
                      description="Design and implement engineering tools to support the next generation
                      of IPU's in collaboration with a team of developers. Contributed to a
                      critical evaluation and revamp of team workflow while working with
                      stakeholders to build, deliver, and test features."
                      technologies={[
                        "React",
                        "TypeScript",
                        "C++",
                        "Agile Development",
                        "CI/CD",
                      ]}
                      location="Hillsboro, OR"
                    />
                  </li>
                  <li className="mb-12">
                    <ExperienceCard
                      startDate="June 2019"
                      endDate="September 2020"
                      company="Becton Dickinson"
                      position="Software Engineering Intern"
                      description="Collaborated with designers to build a unified front-end component library for an upcoming biomedical research tool. 
                      Engineered legacy project file support for an existing application. 
                      Contributed with developers to extend unit test coverage."
                      technologies={[
                        "React",
                        "TypeScript",
                        "Jest Testing",
                        "UI/UX Design",
                      ]}
                      location="Ashland, OR"
                    />
                  </li>
                  <li className="mb-12">
                    <ExperienceCard
                      startDate="September 2020"
                      endDate="June 2021"
                      company="Collin’s Aerospace"
                      position="Capstone Team Lead"
                      description="Lead a capstone project team in collaboration with Collin's Aerospace, through the development of a drone based system 
                      to provide real time wildfire data to airborne firefighting efforts. Designed, architected and implemented a low-cost scalable 
                      backend on AWS, user-facing frontend, and a GPU compute powered application for hotspot localization."
                      technologies={[
                        "Parallel Programming",
                        "ROS",
                        "C++",
                        "React",
                        "TypeScript",
                        "AWS",
                      ]}
                      location="Corvallis, OR"
                    />
                  </li>
                </ol>
              </section>
            </div>
          </div>
          {/* <div className="flex flex-col absolute lg:w-1/2 right-36 overflow-y-visible z-10 gap-y-14">
            <div className="!rounded-2xl glass h-52"></div>
          </div> */}
        </div>
      </section>

      <section
        id="sectionPin"
        className="relative flex w-screen h-1/2 select-none"
      >
        <div className="pin-wrap-sticky">
          <div className="pin-wrap flex items-center justify-around">
            <div className="flex justify-center items-center group rounded w-[30vw] h-[30vw] bg-white relative hover:scale-105 transition-transform content-center">
              <Image
                className="hover:blur-md hover:opacity-80 transition-all"
                src="/cs446_final.png"
                alt="recipro screenshot"
                width={0}
                height={0}
                style={{ width: "auto", height: "100%" }}
              />
              <h2 className="absolute text-2xl font-bold text-slate-900 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                Protein residue interaction network analysis
              </h2>
            </div>
            <div className="flex justify-center items-center group rounded w-[30vw] h-[30vw] bg-white relative hover:scale-105 transition-transform content-center">
              {/* https://stackoverflow.com/questions/65169431/how-to-set-the-next-image-component-to-100-height */}
              <Image
                className="hover:blur-md hover:opacity-80 transition-all"
                src="/recipro_cropped.png"
                sizes="100vh"
                style={{ width: "auto", height: "100%" }}
                width={0}
                height={0}
                alt="recipro screenshot"
              />
              <h2 className="absolute text-2xl font-bold text-slate-900 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                Recipe hosting website drawing on Node and SQL technologies
              </h2>
            </div>
            <div className="rounded w-[30vw] h-[30vw] bg-white"></div>
            <div className="rounded w-[30vw] h-[30vw] bg-white"></div>
            <div className="rounded w-[30vw] h-[30vw] bg-white"></div>
            <div className="rounded w-[30vw] h-[30vw] bg-white"></div>
            <div className="rounded w-[30vw] h-[30vw] bg-white"></div>
            <div className="rounded w-[30vw] h-[30vw] bg-white"></div>
          </div>
        </div>
      </section>

      <div className="relative flex flex-col justify-center w-screen h-screen text-6xl">
        <Footer />
      </div>

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

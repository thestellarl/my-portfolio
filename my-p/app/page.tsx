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
import ExperienceCard from "@/components/ExperienceCard";
import BackgroundGradient from "@/components/Background";
import { ProjectCard } from "@/components/ProjectCard";

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
      <div className="absolute flex space-x-8 bottom-6 z-10 fill-white max-w-screen-xl w-full md:px-12 md:left-12 md:bottom-12 lg:left-24 mx-auto pointer-events-none">
        <a
          className="!pointer-events-auto"
          target="_blank"
          href="https://www.linkedin.com/in/lucas-stella-28700615a/"
        >
          <LinkedInIcon dim={36} />
        </a>
        <a
          className="!pointer-events-auto"
          target="_blank"
          href="https://github.com/thestellarl"
        >
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
        </div>
      </section>

      <section
        id="sectionPin"
        className="relative flex w-screen h-1/2 select-none"
      >
        <div className="pin-wrap-sticky">
          <div className="pin-wrap flex items-center justify-around px-[40vw] space-x-32">
            <ProjectCard
              title="Protein residue interaction network analysis"
              href="https://github.com/picodase/cs446_final"
              image="/cs446_final.png"
            />
            <ProjectCard
              title="Recipe hosting website drawing on Node and SQL technologies"
              href="https://github.com/lpstella/recipro"
              image="/recipro_cropped.png"
            />
            <ProjectCard
              title="Drone Videography. I build and fly drones and sometimes I film
              stuff"
              href="https://www.instagram.com/p/CEXPzvzp5P_/"
              image="/drone_gold_still_cropped.png"
            />
            <ProjectCard
              title="Built a mobile controlled LED display utilizing the ESP8266"
              href="https://github.com/lpstella/recipro"
              image="/light_bar.jpg"
            />
            <ProjectCard
              title="Designed a Drone based system to improve the situal awareness
              of Airborn Wildfire Fighting efforts"
              href="https://eecs.oregonstate.edu/project-showcase/projects/?id=HhhD4OZfTfbfwfKg"
              image="/drone.png"
            />
          </div>
        </div>
      </section>

      <div className="relative flex flex-col justify-center w-screen h-screen text-6xl">
        <Footer />
      </div>
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

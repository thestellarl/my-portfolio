"use client";

import React from "react";
import "./App.css";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { GithubIcon } from "../icons/GithubIcon";
import Footer from "@/components/Footer";
import LandingScreen from "@/components/Hero";
import ExperienceCard from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
const TinyViewport = dynamic(() => import("@/components/TinyViewport"));
import {
  cs446_final,
  drone,
  firewatch_sc,
  light_bar,
  recipro,
  shopstack,
} from "@/public/images";
import dynamic from "next/dynamic";

function App(): React.ReactNode {
  const appRef = React.useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [gradientVisible, setGradientVisible] = React.useState(false);

  return (
    <div
      className="App"
      ref={appRef}
      style={{ fontFamily: "BeVietnam-Regular" }}
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => setGradientVisible(true)}
      onMouseLeave={() => setGradientVisible(false)}
    >
      <div className="social-links absolute flex space-x-8 bottom-6 z-10 max-w-screen-xl md:px-12 left-8 md:left-12 md:bottom-12 lg:left-24 mx-auto">
        <a
          className=""
          target="_blank"
          href="https://www.linkedin.com/in/lucas-stella-28700615a/"
        >
          <LinkedInIcon dim={36} />
        </a>
        <a className="" target="_blank" href="https://github.com/thestellarl">
          <GithubIcon dim={36} />
        </a>
      </div>
      <section className="bg-color1 relative flex items-center justify-center h-screen w-screen whitespace-nowrap">
        <div className="absolute right-[5%] invisible lg:!visible">
          <Footer />
        </div>
        <div className="flex flex-col name-card glass absolute left-0 py-8 justify-center">
          <div className="flex font-semibold w-1/2 text-left mx-8 whitespace-nowrap text-color3 font-sans">
            <LandingScreen />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center w-screen relative">
        <div className="max-w-screen-xl w-full md:px-12 md:py-20 lg:px-24 mx-auto">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-color3 sm:text-5xl pt-8 md:pt-0">
                  <a href="/">Lucas Stella</a>
                </h1>
              </div>
            </header>
            <div className="pt-24 lg:w-1/2 lg:py-24 text-color3 px-5 experience-container">
              <section>
                <ol className="group/list">
                  <li className="mb-12">
                    <ExperienceCard
                      startDate="2024"
                      endDate="present"
                      company="Becton Dickinson"
                      position="Senior Test Automation Engineer"
                      description="Optimized testing efficiency, playing a key role in reducing test duration by
                      50% through strategic improvements. Refactored substantial portions of the Page Object Model
                      (POM) code, leveraging advanced typing strategies in TypeScript to improve code quality and maintainability. 
                      Utilized TypeScript in a behavior-driven design testing approach, employing Gherkin,
                      Cucumber-JS, and Playwright frameworks"
                      technologies={[
                        "React",
                        "TypeScript",
                        "C++",
                        "Agile Development",
                        "CI/CD",
                      ]}
                      location="Ashland, OR"
                      link="https://www.flowjo.com/"
                    />
                  </li>
                  <li className="mb-12">
                    <ExperienceCard
                      startDate="2021"
                      endDate="2024"
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
                      link="https://www.intel.com/"
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
                      link="https://www.flowjo.com/"
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
                      link="https://www.collinsaerospace.com/"
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
        id="scroll-section"
        className="relative flex flex-col w-screen items-center pb-32 shadow"
      >
        <div className="max-w-screen-xl w-full text-left md:[&>*:nth-child(even)]:flex-row-reverse md:[&>*:nth-child(even)]:text-right flex flex-col gap-y-9 px-5">
          <ProjectCard
            title="FireWatch Aerial Guardian"
            description="Lead a capstone project team in collaboration with Collin's Aerospace, through the development
                  of a drone based system to provide real time wildfire data to airborne firefighting efforts. Designed, architected
                  and implemented a low-cost scalable backend on AWS, user-facing frontend, and a GPU compute powered application
                  for hotspot localization."
            href="https://eecs.oregonstate.edu/project-showcase/projects/?id=HhhD4OZfTfbfwfKg"
            image={firewatch_sc}
          />

          <ProjectCard
            title="ShopStack"
            href="https://github.com/picodase/cs446_final"
            image={shopstack}
            description="Designed and developed a robust system for real-time logging of serial traffic data from industrial machinery, 
                          as well as an intuitive point-of-capture user interface.\n The system has since processed over 50,000 square feet of flooring production data,
                          delivering substantial operational cost reductions that have resulted in thousands of dollars in savings for the business."
          />

          <ProjectCard
            title="Hemoglobin Interaction Network Analysis"
            description="Analyzed the features of residue interaction networks from several homologous hemoglobin protein structures to determine relatedness"
            href="https://github.com/picodase/cs446_final"
            image={cs446_final}
          />

          <ProjectCard
            title="Recipro"
            description="Recipe hosting website built to create, share, and combine recipes. Built using Node and SQL technologies."
            href="https://github.com/lpstella/recipro"
            image={recipro}
          />

          <ProjectCard
            title="Drone Videography"
            description="I've been flying drones for over 7 years, and have experience with both DJI and FPV drones. I've worked to capture the feeling of weightlessness through freestyle and cinematic flying."
            href="https://www.instagram.com/p/CEXPzvzp5P_/"
            image={drone}
          />

          <ProjectCard
            title="2018 UW Undergrad Design Award"
            description="I designed and built a smartphone controlled LED display utilizing the ESP8266 that featured CAD designed parts, 3d printed, laser cut, and vacuum formed components.
              The project was submitted to the 2018 Maker Summit hosted at the University of Washington."
            image={light_bar}
          />
        </div>
      </section>

      <section
        id="scroll-section"
        className="relative flex w-screen items-center pb-32 shadow py-24 justify-center flex-col md:flex-row"
      >
        <div className="pointer-events-none sm:pointer-events-auto">
          <TinyViewport
            width={600}
            height={600}
            modelSrc={"enclosureLid.STL"}
          />
        </div>
        <div className="px-6 py-8 text-color3">
          <a href="/cad-design">
            <span className="text-3xl font-bold underline">
              Checkout some of my CAD work{" "}
              <i className="bi bi-arrow-right text-2xl inline"></i>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

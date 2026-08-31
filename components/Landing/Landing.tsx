"use client";

import React from "react";
import "../../app/App.css";
import { LinkedInIcon } from "../../icons/LinkedInIcon";
import { GithubIcon } from "../../icons/GithubIcon";
import Footer from "@/components/Footer";
import LandingScreen from "@/components/Hero";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { cadCallout } from "@/data/cad";
import { CadCallout } from "@/components/CadCallout";
import { ProjectCard } from "@/components/ProjectCard";

interface LandingProps {
  blogCallout?: React.ReactNode;
}

function Landing({ blogCallout }: LandingProps): React.ReactNode {
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
      <div
        className="social-links fixed right-3 top-3 z-50 flex items-center gap-4 rounded-full bg-color3 px-4 py-2.5 shadow-lg ring-1 ring-black/10 fill-light1
                   md:absolute md:right-auto md:top-auto md:bottom-12 md:left-12 md:z-10 md:mx-auto md:max-w-screen-xl md:gap-8 md:rounded-none md:bg-transparent md:px-12 md:py-0 md:shadow-none md:ring-0
                   lg:left-24"
      >
        <a
          aria-label="Lucas Stella on LinkedIn"
          className="flex items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light1 focus-visible:ring-offset-2 focus-visible:ring-offset-color3 md:focus-visible:ring-offset-transparent"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/lucas-stella-28700615a/"
        >
          <LinkedInIcon dim={36} />
        </a>
        <a
          aria-label="Lucas Stella on GitHub"
          className="flex items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light1 focus-visible:ring-offset-2 focus-visible:ring-offset-color3 md:focus-visible:ring-offset-transparent"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/thestellarl"
        >
          <GithubIcon dim={36} />
        </a>
      </div>
      <section className="bg-color1 relative flex items-center justify-center h-screen w-screen whitespace-nowrap">
        <div
          aria-hidden="true"
          className="code-watermark absolute inset-y-0 right-0 hidden lg:flex items-center justify-end pr-12 pointer-events-none select-none"
        >
          <Footer />
        </div>
        <div className="flex flex-col name-card glass absolute left-0 py-8 justify-center">
          <div className="flex font-semibold w-1/2 text-left mx-8 whitespace-nowrap text-color3 font-sans">
            <LandingScreen />
          </div>
        </div>
        {blogCallout ? (
          <div
            className="absolute z-10 bottom-24 left-8 right-8 max-w-md whitespace-normal
                       md:bottom-32 md:left-12 md:right-auto md:w-[420px]
                       lg:left-24"
          >
            {blogCallout}
          </div>
        ) : null}
      </section>

      <section className="flex items-center justify-center w-screen relative">
        <div className="max-w-screen-xl w-full md:px-12 md:py-20 lg:px-24 mx-auto">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-center lg:py-24">
              <div className="text-left px-5 md:px-0">
                <p
                  className="text-color2 text-xl mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-terminal)" }}
                >
                  <span className="inline-block">lucas@lstella.dev</span>
                  <span className="inline-block">:~/experience$</span>
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-color3 sm:text-5xl">
                  <a href="/">Lucas Stella</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium text-color3">
                  Senior Test Automation Engineer · Becton Dickinson
                </h2>
                <p className="mt-4 max-w-sm leading-normal text-color3/80">
                  I build the tools that make software teams faster — test
                  frameworks, developer tooling, and the automation that ties
                  them together. Currently working in TypeScript and Playwright
                  from Portland, OR.
                </p>
                <a
                  className="mt-6 inline-block font-medium text-color2 underline underline-offset-4 hover:text-color3"
                  href="mailto:lucas@lstella.dev"
                >
                  lucas@lstella.dev
                </a>
              </div>
            </header>
            <div className="pt-24 lg:w-7/12 lg:py-24 text-color3 px-5 experience-container">
              <section>
                <ol className="group/list">
                  {experiences.map((experience) => (
                    <li
                      className="mb-16 lg:mb-20"
                      key={`${experience.company}-${experience.startDate}`}
                    >
                      <ExperienceCard {...experience} />
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative flex flex-col w-screen items-center pb-32"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-24">
          <hr
            className="mb-10 border-0 border-t border-dashed border-color3/25"
            aria-hidden="true"
          />
          <h2
            id="projects-heading"
            className="text-color2 text-xl mb-6 leading-tight text-left"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            <span className="inline-block">lucas@lstella.dev</span>
            <span className="inline-block">:~/projects$</span>
          </h2>
          <ol className="flex flex-col gap-y-8">
            {projects.map((project, index) => (
              <li key={project.title}>
                <ProjectCard {...project} reverse={index % 2 === 1} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="cad"
        className="relative flex flex-col w-screen items-center pb-32"
        aria-labelledby="cad-heading"
      >
        <div className="max-w-screen-xl w-full px-5 md:px-12 lg:px-24">
          <hr
            className="mb-10 border-0 border-t border-dashed border-color3/25"
            aria-hidden="true"
          />
          <h2
            id="cad-heading"
            className="text-color2 text-xl mb-6 leading-tight text-left"
            style={{ fontFamily: "var(--font-terminal)" }}
          >
            <span className="inline-block">lucas@lstella.dev</span>
            <span className="inline-block">:~/cad$</span>
          </h2>
          <CadCallout {...cadCallout} />
        </div>
      </section>
    </div>
  );
}

export default Landing;

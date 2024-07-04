import { title } from "process";
import React from "react";
import styled from "styled-components";

interface IExperienceCardProps {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  link: string;
}

const ExperienceCard = ({
  position,
  company,
  location,
  startDate,
  endDate,
  description,
  technologies,
  link,
}: IExperienceCardProps) => {
  return (
    <div className="exp group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:opacity-25 lg:hover:!opacity-100">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-dark2/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg bg-color1 bg-opacity-50"></div>
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 text-left"
        aria-label="2018 to Present"
      >
        {startDate}-{endDate}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight hover:text-blue focus-visible:text-blue  group/link text-base"
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label="Lead Engineer at Upstatement"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span className="font-bold">
                {`${position} · `}
                <span className="inline-block">
                  {company}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
          <div>
            <div className="text-slate-500" aria-hidden="true">
              {location}
            </div>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-left">{description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((technology, index) => {
            return (
              <li className="mr-1.5 mt-2" key={index}>
                <div className="flex items-center rounded-full bg-light2/10 px-3 py-1 text-xs font-medium leading-5 text-blue ">
                  {technology}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;

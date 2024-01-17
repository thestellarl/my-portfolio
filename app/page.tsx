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

  const mobileCheck = function () {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent);
    return check;
  };

  return (
    <div
      className="App"
      ref={appRef}
      style={{ fontFamily: "BeVietnam-Regular" }}
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => setGradientVisible(true)}
      onMouseLeave={() => setGradientVisible(false)}
    >
      <div className="social-links absolute flex space-x-8 bottom-6 z-10 max-w-screen-xl w-full md:px-12 left-8 md:left-12 md:bottom-12 lg:left-24 mx-auto">
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
            <div className="pt-24 lg:w-1/2 lg:py-24 text-color3 px-5">
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
        <div className="max-w-screen-xl w-full text-left md:[&>*:nth-child(even)]:flex-row-reverse [&>*:nth-child(even)]:text-right flex flex-col gap-y-9 px-5">
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

      <div className="relative flex flex-col justify-center items-center py-24 w-screen text-6xl bg-color3">
        <Footer />
      </div>
    </div>
  );
}

export default App;

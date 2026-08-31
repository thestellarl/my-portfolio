/**
 * Work history rendered by <ExperienceCard>. Newest first.
 *
 * To add a role, append an object here — nothing else needs to change.
 *  - summary:     one or two sentences: what the team/product is and your role in it
 *  - highlights:  concrete outcomes, one per line (rendered as a "+" diff list)
 *  - projects:    optional named things you shipped there, each with a blurb and link
 */
export interface ExperienceProject {
  name: string;
  description: string;
  href?: string;
}

export interface Experience {
  position: string;
  company: string;
  companyUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  projects?: ExperienceProject[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    position: "Senior Test Automation Engineer",
    company: "Becton Dickinson",
    companyUrl: "https://www.bd.com/",
    location: "Ashland, OR",
    startDate: "2024",
    endDate: "present",
    summary:
      "Own end-to-end test automation for FlowJo, BD's flow cytometry analysis platform used by research labs worldwide.",
    highlights: [
      "Cut automated test suite duration by 50%.",
      "Rebuilt the Page Object Model in strictly typed TypeScript for long-term maintainability.",
      "Drive behavior-driven testing with Playwright, Cucumber-JS, and Gherkin so scientists and engineers share one spec.",
    ],
    projects: [
      {
        name: "FlowJo",
        description:
          "Desktop flow cytometry analysis software — the product under test.",
        href: "https://www.flowjo.com/",
      },
    ],
    technologies: ["TypeScript", "Playwright", "Cucumber-JS", "Gherkin", "CI/CD"],
  },
  {
    position: "Development Tools Engineer",
    company: "Intel",
    companyUrl: "https://www.intel.com/",
    location: "Hillsboro, OR",
    startDate: "2021",
    endDate: "2024",
    summary:
      "Built the internal CLI and developer tooling used to bring up Intel's next-generation SmartNICs and datacenter networking hardware.",
    highlights: [
      "Worked directly with stakeholder teams to scope, ship, and test features.",
      "Helped drive a rework of the team's development workflow.",
    ],
    projects: [
      {
        name: "SmartNIC bring-up tooling",
        description:
          "CLI and developer tools for validating new datacenter networking silicon.",
      },
    ],
    technologies: ["TypeScript", "C++", "CLI Tooling", "CI/CD"],
  },
  {
    position: "Capstone Team Lead",
    company: "Collins Aerospace",
    companyUrl: "https://www.collinsaerospace.com/",
    location: "Corvallis, OR",
    startDate: "Sep 2020",
    endDate: "Jun 2021",
    summary:
      "Led a capstone team partnered with Collins Aerospace to build drone-based, real-time wildfire mapping for airborne firefighting crews.",
    highlights: [
      "Architected the AWS backend and user-facing frontend.",
      "Built GPU-powered hotspot localization for the imagery pipeline.",
    ],
    projects: [
      {
        name: "FireWatch Aerial Guardian",
        description:
          "Drone system delivering live wildfire hotspot data to firefighting aircraft.",
        href: "https://eecs.oregonstate.edu/project-showcase/projects/?id=HhhD4OZfTfbfwfKg",
      },
    ],
    technologies: [
      "Parallel Programming",
      "ROS",
      "C++",
      "React",
      "TypeScript",
      "AWS",
    ],
  },
  {
    position: "Software Engineering Intern",
    company: "Becton Dickinson",
    companyUrl: "https://www.bd.com/",
    location: "Ashland, OR",
    startDate: "Jun 2019",
    endDate: "Sep 2020",
    summary:
      "Front-end engineering on an upcoming biomedical research tool, working alongside the design team.",
    highlights: [
      "Built a unified front-end component library with designers.",
      "Engineered legacy project-file support for an existing application.",
      "Extended unit test coverage across the codebase.",
    ],
    technologies: ["React", "TypeScript", "Jest", "UI/UX Design"],
  },
];

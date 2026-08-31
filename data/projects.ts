import type { StaticImageData } from "next/image";
import {
  cs446_final,
  drone,
  firewatch_sc,
  light_bar,
  millwise,
  quotegen,
  recipro,
  roomtone,
} from "@/public/images";

/**
 * Projects rendered by <ProjectCard>. Order here is display order.
 *
 * To add a project, import its image from "@/public/images" and append an
 * object — nothing else needs to change.
 *  - context:     where it happened (capstone, client work, coursework, personal…)
 *  - period:      when, as free text ("2018", "2020 — 2021", "2017 — present")
 *  - summary:     one or two sentences: what it is and why it exists
 *  - highlights:  concrete outcomes, one per line (rendered as a "+" list)
 *  - links:       each gets its own button; label is what the reader will open
 *  - image:       optional; without one the card is text-only at full width
 *  - imagePosition: which part of the image to keep when it is cropped ("left top", "bottom"…)
 */
export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  image?: StaticImageData;
  imageAlt?: string;
  /** CSS object-position for the image when it is cover-cropped, e.g. "left top". */
  imagePosition?: string;
  context: string;
  period?: string;
  role?: string;
  summary: string;
  highlights?: string[];
  links?: ProjectLink[];
  technologies?: string[];
}

export const projects: Project[] = [
  {
    title: "MillWise",
    image: millwise,
    imageAlt: "MillWise console sign-in page: Master your production line",
    context: "Product",
    summary:
      "A production-line console for industrial flooring machinery: real-time logging of serial traffic from the machines, diagnostics, device management, and a point-of-capture interface for operators on the floor.",
    highlights: [
      "Has processed over 50,000 square feet of flooring production data.",
      "Cut operational costs enough to save the business thousands of dollars.",
    ],
    links: [{ label: "millwise.app", href: "https://millwise.app/" }],
    technologies: ["Serial I/O", "Data logging"],
  },
  {
    title: "QuoteGen Pro",
    image: quotegen,
    imagePosition: "left top",
    imageAlt:
      "QuoteGen Pro landing page: hero headline beside the Visual Design Studio mockup tool",
    context: "Product",
    summary:
      "AI-powered visual proposals for contractors. Describe the change and it generates a mockup of the finished job on the customer's own photo, so the quote shows the result before work begins.",
    highlights: [
      "Custom-rolled cloud CI/CD: low cost, zero-downtime deploys.",
      "Responsive layouts built for mobile and desktop.",
      "Email integrations for sending and tracking proposals.",
      "Client portals where customers review and respond to quotes.",
    ],
    links: [{ label: "quote-gen.com", href: "https://quote-gen.com/" }],
    technologies: [
      "Generative AI",
      "CI/CD",
      "Cloud infrastructure",
      "Responsive UI",
      "Email integration",
    ],
  },
  {
    title: "Room Tone",
    image: roomtone,
    imageAlt: "Room Tone watchlist showing lamps and stands at their lowest seen price",
    context: "Product",
    summary:
      "A price watchlist for warm, well-made pieces for the home. Tracks pieces from makers like TALA, Yamazaki, and Twelve South and flags when a price is the lowest it has seen.",
    links: [
      { label: "roomtone.store", href: "https://roomtone.store/" },
      {
        label: "Instagram",
        href: "https://www.instagram.com/roomtone.design/",
      },
    ],
    technologies: [
      "Product scraping",
      "Price tracking",
      "Internal tooling",
      "Social media content generation",
      "Data pipelines",
    ],
  },
  {
    title: "FireWatch Aerial Guardian",
    image: firewatch_sc,
    imageAlt: "FireWatch web dashboard showing a wildfire hotspot map",
    context: "Capstone · Collins Aerospace",
    period: "2020 — 2021",
    role: "Team lead",
    summary:
      "A drone-based system that gives airborne firefighting crews real-time wildfire data, built with Collins Aerospace as an Oregon State capstone.",
    highlights: [
      "Designed and built a low-cost, scalable backend on AWS.",
      "Shipped the user-facing frontend for crews in the air.",
      "Wrote a GPU-compute application for hotspot localization.",
    ],
    links: [
      {
        label: "Project showcase",
        href: "https://eecs.oregonstate.edu/project-showcase/projects/?id=HhhD4OZfTfbfwfKg",
      },
    ],
    technologies: ["AWS", "React", "TypeScript", "ROS", "C++", "GPU compute"],
  },
  {
    title: "Hemoglobin Interaction Network Analysis",
    image: cs446_final,
    imageAlt: "Residue interaction network graph of a hemoglobin structure",
    context: "Coursework",
    summary:
      "Compared residue interaction networks across several homologous hemoglobin protein structures to measure how related they are.",
    technologies: ["Network analysis", "Bioinformatics"],
  },
  {
    title: "Recipro",
    image: recipro,
    imageAlt: "Recipro recipe page",
    context: "Personal",
    summary:
      "A recipe hosting site for creating, sharing, and combining recipes.",
    links: [{ label: "Source", href: "https://github.com/thestellarl/recipro" }],
    technologies: ["Node.js", "SQL"],
  },
  {
    title: "Drone Videography",
    image: drone,
    imageAlt: "Aerial still from a drone flight",
    context: "Personal",
    period: "7+ years",
    summary:
      "Freestyle and cinematic flying on both DJI and FPV drones, chasing the feeling of weightlessness on camera.",
    links: [
      { label: "Watch", href: "https://www.instagram.com/p/CEXPzvzp5P_/" },
    ],
    technologies: ["Custom Built FPV", "Long range", "Cinematic", "Racing"],
  },
  {
    title: "Smartphone-controlled LED Display",
    image: light_bar,
    imageAlt: "LED light bar with 3D-printed and vacuum-formed enclosure",
    context: "UW Maker Summit",
    period: "2018",
    role: "Undergrad Design Award",
    summary:
      "An ESP8266-driven LED display controlled from a phone, with CAD-designed parts that were 3D printed, laser cut, and vacuum formed.",
    highlights: ["Won the 2018 University of Washington Undergrad Design Award."],
    technologies: [
      "ESP8266",
      "CAD",
      "3D printing",
      "Laser cutting",
      "Vacuum forming",
    ],
  },
];

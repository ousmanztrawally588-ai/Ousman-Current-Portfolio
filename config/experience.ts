import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "google-data-driven-decisions",
    position: "Ask Questions to Make Data-Driven Decisions",
    company: "Google (via Coursera)",
    location: "Online",
    startDate: new Date("2026-03-11"),
    endDate: new Date("2026-03-11"),
    description: [
      "Completed an online course authorized by Google covering how to ask effective questions to drive data-informed decisions.",
    ],
    achievements: [
      "Learned how to frame business problems as data questions and identify the right data to answer them.",
    ],
    skills: ["SQL"],
    companyUrl: "https://www.coursera.org/google-certificates",
  },
  {
    id: "google-prepare-data",
    position: "Prepare Data for Exploration",
    company: "Google (via Coursera)",
    location: "Online",
    startDate: new Date("2026-03-11"),
    endDate: new Date("2026-03-11"),
    description: [
      "Completed an online course authorized by Google on organizing, securing, and preparing data for analysis.",
    ],
    achievements: [
      "Learned data organization, security practices, and exploration techniques used in real analytics workflows.",
    ],
    skills: ["SQL"],
    companyUrl: "https://www.coursera.org/google-certificates",
  },
  {
    id: "aspire-leaders",
    position: "2026 Aspire Leaders Program",
    company: "Aspire Institute",
    location: "Online",
    startDate: new Date("2026-04-01"),
    endDate: new Date("2026-04-01"),
    description: [
      "Completed all modules of a global leadership development program through Aspire Institute.",
    ],
    achievements: [
      "Completed 40 hours of coursework strengthening self-confidence, critical thinking, and communication skills.",
      "Deepened commitment to making a positive social impact within a global community.",
    ],
    skills: [],
    companyUrl: "https://www.aspireleaders.org",
  },
  {
    id: "cisco-data-science",
    position: "Introduction to Data Science",
    company: "Cisco Networking Academy",
    location: "Online",
    startDate: new Date("2026-01-19"),
    endDate: new Date("2026-01-19"),
    description: [
      "Completed an introductory course on data science fundamentals through Cisco's Networking Academy program.",
    ],
    achievements: [
      "Learned foundational data science concepts and how data drives decision-making.",
    ],
    skills: [],
    companyUrl: "https://www.netacad.com",
  },
  {
    id: "cisco-cybersecurity",
    position: "Introduction to Cybersecurity",
    company: "Cisco Networking Academy",
    location: "Online",
    startDate: new Date("2025-12-27"),
    endDate: new Date("2025-12-27"),
    description: [
      "Completed a student-level course on cybersecurity fundamentals, threats, and protective measures.",
    ],
    achievements: [
      "Learned how to explain common cyber threats and vulnerabilities and how organizations protect against attacks.",
      "Gained awareness of career paths within cybersecurity.",
    ],
    skills: [],
    companyUrl: "https://www.netacad.com",
  },
];
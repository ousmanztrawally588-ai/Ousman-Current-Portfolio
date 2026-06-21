import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-website",
    companyName: "Personal Portfolio Website",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "A modern, responsive personal portfolio website built from scratch with HTML, CSS, JavaScript, and Bootstrap, featuring a gradient hero section and interactive UI elements.",
    techStack: ["HTML 5", "CSS 3", "Javascript", "Bootstrap"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Hero Section",
        description:
          "Eye-catching landing section with a gradient design, animated tech tags, and call-to-action buttons.",
        imgArr: ["/profile-img.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I built this personal portfolio website from scratch using HTML, CSS, JavaScript, and Bootstrap to showcase my skills and projects as a Computer Science student.",
        "The site features a bold gradient hero section, a responsive layout, and sections for About, Skills, Projects, and Contact, all built with clean, maintainable code.",
      ],
      bullets: [
        "Designed and built a fully responsive portfolio website using HTML, CSS, JavaScript, and Bootstrap.",
        "Created a custom gradient hero section with animated skill tags and call-to-action buttons.",
        "Structured the site with dedicated sections for About, Skills, Projects, and Contact.",
        "Hosted the source code on GitHub as part of my growing web development portfolio.",
      ],
    },
  },
  {
    id: "aiu-parcel-tracker",
    companyName: "AIU Parcel Tracker System",
    type: "Personal",
    category: ["Backend"],
    shortDescription:
      "A Java console/GUI application for tracking incoming and collected parcels at AIU, built as a group project with class-based object-oriented design.",
    techStack: ["Java"],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Main Menu",
        description:
          "Java Swing-based main menu allowing users to track parcels, view collected parcels, and access admin functions.",
        imgArr: ["/logo.png"],
      },
      {
        title: "Admin Menu",
        description:
          "Dedicated admin interface for managing parcel records and viewing system data.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The AIU Parcel Tracker System is a Java application developed as a group project to manage parcel tracking for students. The system uses Java Swing dialogs for the main menu and admin menu, allowing users to track parcels, view all collected parcels, and search for specific parcel records.",
        "I owned the core program entry point and main menu logic, including the showMainMenu() method that drives the user-facing flow and the showAdminMenu() method for administrative functions. The project also used an abstract Parcel class with subclasses for IncomingParcel and CollectedParcel, demonstrating object-oriented design principles such as inheritance and polymorphism.",
      ],
      bullets: [
        "Built the main entry point (main method) and core menu-driving logic in Java.",
        "Implemented showMainMenu() and showAdminMenu() using Java Swing's JOptionPane for interactive dialogs.",
        "Collaborated in a 4-person team, each owning distinct classes (Parcel, IncomingParcel, CollectedParcel, ParcelTrackerSystem).",
        "Applied object-oriented principles including abstract classes and inheritance for parcel types.",
        "Implemented features to track parcels, view all collected parcels, and find specific parcel records.",
      ],
    },
  },
  {
    id: "chefs-kitchen-mixup",
    companyName: "Chef's Kitchen Mix-Up",
    type: "Personal",
    category: ["Frontend"],
    shortDescription:
      "An educational Python game for kindergarten-aged children that teaches sentence structure through a drag-and-drop word-ordering mechanic with voice narration.",
    techStack: ["Python"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Gameplay",
        description:
          "Word tiles fall like ingredients; the child drags them into the correct sentence order to complete a recipe-themed challenge.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Chef's Kitchen Mix-Up is an educational game built in Python with Tkinter as part of a group AI/software project aimed at helping kindergarten children (ages 4-6) learn basic sentence structure.",
        "The game presents word tiles that fall like ingredients, and the child must drag them into the correct order to complete a sentence and 'finish the recipe.' Text-to-speech voice narration guides the child through each step, and an SQLite database tracks progress and scores by sentence complexity.",
      ],
      bullets: [
        "Built an educational drag-and-drop word-ordering game using Python and Tkinter.",
        "Implemented a child-friendly UI with a cooking/recipe theme to teach sentence structure.",
        "Integrated text-to-speech (TTS) voice narration to guide young users through gameplay.",
        "Used SQLite to track and score progress based on sentence complexity.",
        "Designed for early childhood learners as part of a group project on adaptive, child-friendly educational software.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
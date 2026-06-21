import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Ousman Trawally's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Ousman Trawally's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Ousman Trawally's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Ousman Trawally.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Ousman Trawally's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ousman Trawally's resume.",
    metadata: {
      title: "Resume",
      description: "Ousman Trawally's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on web development, software engineering, and learning in public.",
    metadata: {
      title: "Blogs",
      description:
        "Ousman Trawally's blog — thoughts on web development, software engineering, and learning in public.",
    },
  },
  experience: {
    title: "Certifications",
    description: "Professional certifications and continuous learning.",
    metadata: {
      title: "Certifications",
      description:
        "Ousman Trawally's Coursera certifications and learning journey.",
    },
  },
};
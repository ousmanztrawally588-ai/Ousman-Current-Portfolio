import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Write scripts, automate tasks, and build applications with a versatile, beginner-friendly language.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "Java",
    description:
      "Build object-oriented applications and desktop GUIs using a widely-used, platform-independent language.",
    rating: 3,
    icon: Icons.java,
  },
  {
    name: "SQL",
    description:
      "Query, manage, and organize relational databases efficiently for data-driven applications.",
    rating: 3,
    icon: Icons.database,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 3,
    icon: Icons.javascript,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 3,
    icon: Icons.react,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 3,
    icon: Icons.bootstrap,
  },
  {
    name: "Excel",
    description:
      "Organize, analyze, and visualize data efficiently using spreadsheets and formulas.",
    rating: 3,
    icon: Icons.spreadsheet,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
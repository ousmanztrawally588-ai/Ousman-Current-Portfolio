import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@ousmanztrawally588-ai",
    icon: Icons.gitHub,
    link: "https://github.com/ousmanztrawally588-ai",
  },
  {
    name: "LinkedIn",
    username: "Ousman Z. Trawally",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ousman-z-trawally-28242634b/",
  },
  {
    name: "Gmail",
    username: "ousmanztrawally588",
    icon: Icons.gmail,
    link: "mailto:ousmanztrawally588@gmail.com",
  },
];
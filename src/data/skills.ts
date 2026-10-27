import {
  SiBootstrap,
  SiC,
  SiEslint,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiLinux,
  SiNextdotjs,
  SiSocketdotio,
  SiTailwindcss,
  SiThreedotjs,
  SiVercel,
  SiWebpack,
} from "react-icons/si";

import HtmlSvg from "@/public/icons/html.svg";
import CSSSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import ReactSvg from "@/public/icons/reactjs.svg";
import NodeSvg from "@/public/icons/nodejs.svg";
import MongoSvg from "@/public/icons/mongodb.svg";
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AWSSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

import type { SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: JavascriptSvg },
      { name: "TypeScript", icon: TypescriptSvg },
      { name: "Python", icon: PythonSvg },
      { name: "C", icon: SiC },
    ],
  },
  {
    sectionName: "Frontend Engineering",
    skills: [
      { name: "HTML5", icon: HtmlSvg },
      { name: "CSS3", icon: CSSSvg },
      { name: "React.js", icon: ReactSvg },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Sass / SCSS", icon: SassSvg },
      { name: "React Router", icon: ReactSvg },
      { name: "Next.js App Router", icon: SiNextdotjs },
      { name: "Framer Motion", icon: ReactSvg },
      { name: "React Hook Form", icon: ReactSvg },
      { name: "Responsive Design", icon: CSSSvg },
      { name: "SEO", icon: HtmlSvg },
      { name: "Three.js", icon: SiThreedotjs },
      { name: "Webpack", icon: SiWebpack },
      { name: "ESLint", icon: SiEslint },
    ],
  },
  {
    sectionName: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: NodeSvg },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: NodeSvg },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "Postman", icon: PostmanSvg },
    ],
  },
  {
    sectionName: "Databases & Realtime",
    skills: [
      { name: "MongoDB", icon: MongoSvg },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    sectionName: "Mobile Development",
    skills: [{ name: "Flutter", icon: SiFlutter }],
  },
  {
    sectionName: "Cloud & Deployment",
    skills: [
      { name: "AWS", icon: AWSSvg },
      { name: "Dokploy", icon: DockerSvg },
      { name: "Vercel", icon: SiVercel },
      { name: "Docker", icon: DockerSvg },
    ],
  },
  {
    sectionName: "Developer Tools",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    sectionName: "Networking & Cybersecurity",
    skills: [
      { name: "Networking", icon: SiLinux },
      { name: "Linux", icon: SiLinux },
      { name: "OSINT", icon: SiLinux },
    ],
  },
];

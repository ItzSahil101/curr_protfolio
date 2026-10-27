import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "LovyDate",
    href: "/projects",
    tags: ["Flutter", "Node.js", "Express", "PostgreSQL", "Redis"],
    image: {
      LIGHT: "/images/pic/lovydate.png",
      DARK: "/images/pic/lovydate.png",
    },
  },
  {
    index: 1,
    title: "CafeMate",
    href: "/projects",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: {
      LIGHT: "/images/pic/cafemate.png",
      DARK: "/images/pic/cafemate.png",
    },
  },
  {
    index: 2,
    title: "Old Portfolio",
    href: "/projects",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: {
      LIGHT: "/images/pic/protfolio.png",
      DARK: "/images/pic/protfolio.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "LovyDate",
    favicon: "/favicon.ico",
    imageUrl: ["/images/pic/lovydate.png"],
    description:
      "A dating app featuring authentication, profiles, discovery, matching, chat, and social feeds. Built with Flutter and a Node.js backend.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://lovydate.fun",
  },
  {
    name: "CafeMate",
    favicon: "/favicon.ico",
    imageUrl: ["/images/pic/cafemate.png"],
    description:
      "A cafe ordering and management application built with the MERN stack, featuring menu browsing, cart management, and ordering workflows.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://notsahil.vercel.app",
  },
  {
    name: "Old Portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/images/pic/protfolio.png"],
    description:
      "My previous personal portfolio showcasing my development journey, technical skills, and projects.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://notsahil.vercel.app",
  },
  {
    name: "NepCart",
    favicon: "/favicon.ico",
    imageUrl: ["/images/pic/nepcart.png"],
    description:
      "An e-commerce shopping platform for online sales, product browsing, and order management with a user-friendly interface.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://nepcart.vercel.app",
  },
  {
    name: "AI Code Reviewer",
    favicon: "/favicon.ico",
    imageUrl: ["/images/pic/ai-code-reviewer.png"],
    description:
      "An AI-powered website where you can submit code for automated review, feedback, and suggestions to improve code quality.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://ai-crx.vercel.app",
  },
  {
    name: "Jarvis AI",
    favicon: "/favicon.ico",
    imageUrl: ["/images/pic/jarvis-ai.jpg"],
    description:
      "A Python-based PC assistant with voice commands and automation features, built with a graphical user interface.",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
  {
    name: "Item Detector",
    favicon: "/favicon.ico",
    imageUrl: ["/images/pic/item-detector.jpg"],
    description:
      "A Python computer vision project that detects and predicts items, with a user-friendly graphical interface.",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
  {
    name: "Face Detection",
    favicon: "/favicon.ico",
    imageUrl: ["/images/pic/face-detection.jpg"],
    description:
      "A computer vision project that detects faces from live camera feeds or images, with a graphical interface.",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
  {
    name: "Automation Software",
    favicon: "/favicon.ico",
    imageUrl: ["/images/pic/automation-software.jpg"],
    description:
      "A Python GUI automation tool designed to automate repetitive messaging and email workflows.",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
];

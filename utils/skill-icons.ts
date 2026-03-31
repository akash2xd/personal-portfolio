import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFigma,
  SiBootstrap,
  SiMui,
  SiCanva,
  SiFreelancer,
} from "react-icons/si";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "html":
      return SiHtml5;
    case "css":
      return SiCss;
    case "javascript":
      return SiJavascript;
    case "js":
      return SiJavascript;
    case "typescript":
      return SiTypescript;
    case "ts":
      return SiTypescript;
    case "react":
      return SiReact;
    case "next js":
    case "nextjs":
    case "next.js":
      return SiNextdotjs;
    case "tailwind":
    case "tailwindcss":
      return SiTailwindcss;
    case "node js":
    case "nodejs":
    case "node.js":
      return SiNodedotjs;
    case "mongodb":
      return SiMongodb;
    case "mysql":
      return SiMysql;
    case "firebase":
      return SiFirebase;
    case "git":
      return SiGit;
    case "figma":
      return SiFigma;
    case "bootstrap":
      return SiBootstrap;
    case "materialui":
    case "mui":
      return SiMui;
    case "canva":
      return SiCanva;
    case "illustrator":
    case "photoshop":
      return SiCanva; // Fallback to Canva since Adobe icons were removed from SimpleIcons
    default:
      return SiFreelancer; // Fallback icon
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();
  switch (skillLower) {
    case "html":
      return "#6366f1"; // Indigo-500
    case "css":
      return "#06b6d4"; // Cyan-500
    case "javascript":
      return "#4f46e5"; // Indigo-600
    case "typescript":
      return "#0891b2"; // Cyan-600
    case "react":
      return "#6366f1"; // Indigo-500
    case "next js":
    case "nextjs":
    case "next.js":
      return "#ffffff"; // Keep white for contrast
    case "tailwind":
      return "#06b6d4"; // Cyan-500
    case "node js":
    case "nodejs":
      return "#4f46e5"; // Indigo-600
    case "mongodb":
      return "#0891b2"; // Cyan-600
    case "mysql":
      return "#4338ca"; // Indigo-700
    case "firebase":
      return "#6366f1"; // Indigo-500
    case "git":
      return "#06b6d4"; // Cyan-500
    case "figma":
      return "#4f46e5"; // Indigo-600
    case "bootstrap":
      return "#0891b2"; // Cyan-600
    case "materialui":
    case "mui":
      return "#6366f1"; // Indigo-500
    default:
      return "#6366f1"; // Default Indigo
  }
};

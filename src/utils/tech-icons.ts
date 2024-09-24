import js from "@/assets/javascript-svgrepo-com.svg";
import typescript from "@/assets/typescript-official-svgrepo-com.svg";
import react from "@/assets/react-svgrepo-com.svg";
import next from "@/assets/icon-nextjs.svg";
import git from "@/assets/git-svgrepo-com.svg";
import nest from "@/assets/icon-nest.svg";
import nodejs from "@/assets/nodejs-icon-svgrepo-com.svg";
import php from "@/assets/php-elephant-svgrepo-com.svg";
import expo from "@/assets/light-expo-svgrepo-com.svg";
import tailwind from "@/assets/tailwind-svgrepo-com.svg";

export const icons = {
  react: {
    icon: react,
    label: "React",
  },
  reactNative: {
    icon: react,
    label: "React Native",
  },
  nodejs: {
    icon: nodejs,
    label: "Node.js",
  },
  typecript: {
    icon: typescript,
    label: "Typescript",
  },
  php: {
    icon: php,
    label: "PHP",
  },
  expo: {
    icon: expo,
    label: "Expo",
  },
  javascript: {
    icon: js,
    label: "Javascript",
  },
  tailwind: {
    icon: tailwind,
    label: "Tailwind",
  },
  nestjs: {
    icon: nest,
    label: "NestJs",
  },
  nextjs: {
    icon: next,
    label: "NextJs",
  },
  git: {
    icon: git,
    label: "Github",
  },
} as const;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bbc4ca",
        secondary: "#414140",
      },
      boxShadow: {
        "sharp-right": "40px 40px 0px 10px  #d1d5db", // sombra à direita
      },
    },
  },
  plugins: [],
};
export default config;

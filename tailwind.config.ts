import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      orange: "#1C204B",
      "blue-primary": "#1C204B",
      "blue-dark": "#0E1323",
      "purple-primary": "#5747EA",
      "purple-heading": "#7078C9",
      "purple-text": "#BBC0FF",
      white: "#fff",
    },
    fontFamily: {
      "rubik-light": ["Rubik-light", "sans-serif"],
      "rubik-reg": ["Rubik-reg", "sans-serif"],
      "rubik-med": ["Rubik-med", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;

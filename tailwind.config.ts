import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom: {
          // タイプアイコンの背景色
          poison: "rgb(181, 87, 201)",
          ghost: "rgb(103, 102, 196)",
          grass: "rgb(81, 182, 102)",
          dragon: "rgb(4, 111, 181)",
          flying: "rgb(151, 176, 232)",
          fire: "rgb(253, 151, 69)",
          bug: "rgb(152, 190, 45)",
          water: "rgb(92, 173, 220)",
          steel: "rgb(126, 207, 201)",
          rock: "rgb(203, 190, 135)",
          psychic: "rgb(253, 141, 137)",
          normal: "rgb(148, 152, 151)",
          ice: "rgb(126, 207, 201)",
          ground: "rgb(207, 135, 85)",
          fighting: "rgb(215, 58, 77)",
          fairy: "rgb(239, 153, 224)",
          electric: "rgb(245, 214, 89)",
          // dark:
        },
      },
    },
  },
  plugins: [],
};
export default config;

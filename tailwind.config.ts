import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

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
        primary: colors.purple,
        secondary: colors.pink,
      },

      keyframes: {
        onClick: {
          "0%, 100%": { transform: "scale(1,1)" },
          "50%": { transform: "scale(0.96, 0.96)" },
        },
      },
      animation: {
        onClick: "onClick 200ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx}",
  ],
  
  safelist: [
    "font-bold",
    "font-thin",
    "font-extralight",
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold",
    "font-black",
    "bg-primary",
    "bg-secondary",
    "bg-tertiary",
    "text-primary",
    "text-secondary",
    "text-tertiary",
    "hover:bg-primary",
    "hover:bg-secondary",
    "hover:bg-tertiary",
    "hover:text-primary",
    "hover:text-secondary",
    "hover:text-tertiary",
    "font-rubik",
    "font-ubuntu",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-family-ubuntu),var(--font-family-rubik)"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
      },
      aspectRatio:{
        "3/2":"3/2",
      }
    },
  },
  plugins: [],
} satisfies Config;

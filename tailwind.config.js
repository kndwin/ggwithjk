/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./svgs/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.config.tsx",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("windy-radix-palette"), require("tailwindcss-animate")],
};

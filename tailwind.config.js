/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Organism/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#fd9f1a",
        yellow: "#ffc107",
        bgGray: "#F2EFEA",
        brown: "#c77201",
        darkGray: "#586a92",
      },
    },
  },
  plugins: [],
};

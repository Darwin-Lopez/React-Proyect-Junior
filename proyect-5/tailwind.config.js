/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue:{
          950: "hsl(256, 26%, 20%)",
          500: "hsl(216, 30%, 68%)",
        },
        Gray: {
          950: "hsl(270, 9%, 17%)",
          700: "hsl(273, 4%, 51%)",
          50: "hsl(0, 0%, 98%)"
        },
      },
      fontFamily: {
        serifDisplay: ['"DM Serif Display"', "serif"],
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};

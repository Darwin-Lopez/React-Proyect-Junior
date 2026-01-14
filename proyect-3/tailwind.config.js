/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Red:{
          400: 'hsl(0, 100%, 68%)',
        },
        Blue:{
          950: 'hsl(230, 29%, 20%)',
          100: 'hsl(207, 33%, 95%)',
        }
      },
      fontFamily: {
        Condensed: ['League Spartan', 'sans-serif'],
        Barlow: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

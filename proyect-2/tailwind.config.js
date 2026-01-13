/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green:{
          500: 'hsl(171, 66%, 44%)'
        },
        Blue:{
          100: 'hsl(233, 100%, 69%)'
        },
        Gray:{
          700: 'hsl(210, 10%, 33%)',
          500: 'hsl(201, 11%, 66%)'
        }
      },
    },
  },
  plugins: [],
};

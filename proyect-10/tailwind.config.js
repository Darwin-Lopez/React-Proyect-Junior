/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        Grey: {
          200: "hsl(0, 0%, 85%)"
        }
      },
      fontFamily: {
        Alata: ['Alata', 'sans-serif'],
        Josefin: ['Josefin Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

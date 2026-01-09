/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Navy: {
          800: 'hsl(219, 30%, 18%)',
          850: 'hsl(217, 28%, 15%)',
          900: 'hsl(218, 28%, 13%)',
          950: 'hsl(216, 53%, 9%)',
        },
        Teal: {
          200: 'hsl(176, 68%, 64%)',
        },
        Cyan: {
          500: 'hsl(198, 60%, 50%)',
        },
        Red: {
          500: 'hsl(0, 100%, 63%)',
        },
      },
      fontFamily: {
        Sans: ['Outfit', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

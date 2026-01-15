/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: {
          50: 'hsl(240, 78%, 98%)',
        },
        Gray: {
          650: 'hsl(233, 13%, 49%)',
          700: 'hsl(232, 13%, 33%)',
        },
        Gradient: {
          start: 'hsl(237, 73%, 79%)',
          end: 'hsl(238, 63%, 64%)',
        },
      },
    },
  },
  plugins: [],
}


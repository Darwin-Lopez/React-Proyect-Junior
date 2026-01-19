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
          950: "hsl(240, 38%, 20%)"
        },
        Gray: {
          400: "hsl(240, 18%, 77%)"
        }
      }
    },
  },
  plugins: [],
}


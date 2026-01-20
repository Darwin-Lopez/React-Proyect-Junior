/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Gradient: {
          to: "hsl(335, 100%, 65%)",
          from: "hsl(6, 100%, 80%)",
        },
        Blue: {
          "200": "hsl(243, 100%, 93%)",
          "850": "hsl(228, 56%, 26%)",
          "950": "hsl(229, 57%, 11%)",
        },
        GrayishBlue: "hsl(229, 7%, 55%)",
      },
    },
  },
  plugins: [],
}


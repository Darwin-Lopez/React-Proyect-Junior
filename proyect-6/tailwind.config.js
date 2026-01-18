/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green: {
          500: "hsl(163, 72%, 41%)"
        },

        Red: {
          500: "hsl(356, 69%, 56%)",
          700: "hsl(348, 97%, 39%)"
        },

        Blue: {
          50: "hsl(225, 100%, 98%)",
          600: "hsl(208, 92%, 53%)",
          500: "hsl(203, 89%, 53%)"
        },

        Gradient: {
          Instagram: {
            to: "hsl(37, 97%, 70%)",
            from: "hsl(5, 77%, 71%)",
            via: "hsl(329, 70%, 58%)",
          }
        },

        dark: {
          Gradient: {
            Toggle: {
              to: "hsl(210, 79%, 56%)",
              from: "hsl(146, 68%, 55%)",
            },
          },
        },

        Gray: {
          950: "hsl(230, 17%, 14%)",
          900: "hsl(232, 19%, 15%)",
        },

        Navy: {
          950: "hsl(228, 28%, 20%)",
          50: "hsl(227, 47%, 96%)",
        },

        White: {
          100: "hsl(0, 100%, 100%)",
        },

        Gray: {
          400: "hsl(230, 22%, 74%)",
          650: "hsl(228, 12%, 44%)",
          950: "hsl(230, 17%, 14%)",
        },

        White: {
          100: "hsl(0, 100%, 100%)",
        },
      },
    }
  },
  plugins: [],
};
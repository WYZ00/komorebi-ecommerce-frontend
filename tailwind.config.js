/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "martian-blue": "#314899",
        "raisin-black": "#231F20",
        silver: "#C2C2C2",
        "dim-grey": "#737373",
        "floral-white": "#F8F4EC",
        "white-smoke": "#F3F3F3",
        "sea-salt": "#FAFAFA",
        periwinkle: "#C7DBFF",
        "violet-blue": "#4243B1",
        "violet-blue-2": "#3738A6",
        auqamarine: "#B2FCE4",
        red: "#DF1B41",
      },
    },
  },
  plugins: [],
};

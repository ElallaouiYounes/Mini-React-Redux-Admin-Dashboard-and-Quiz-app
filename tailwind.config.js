/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        purply : "#764ABC",
      },
      fontFamily: {
        anton: ["Anton SC", "system-ui"],
        chango: ["Chango", "system-ui"],
        promt: ["Promt", "system-ui"],
        roboto: ["Roboto", "system-ui"],
      },
    },
  },
  plugins: [],
}
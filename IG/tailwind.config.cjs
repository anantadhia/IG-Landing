/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js}",
    "./components/card{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

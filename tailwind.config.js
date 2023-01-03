/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs/'],
  theme: {
    extend: {},
  },
  dausyui: {
    themes: ["luxury"]
  },
  plugins: [require("daisyui")],
}

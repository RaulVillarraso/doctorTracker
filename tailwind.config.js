/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-tardis': '#00060b',
        'dblue-tardis': '#00203c',
        'blue-tardis': '#003b6f',
        'lblue-tardis': '#6f8ea9',
        'light-tardis': '#a6b8c7'
      }
    },
  },
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
  plugins: [require("daisyui")],
}


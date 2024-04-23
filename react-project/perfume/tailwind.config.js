/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");


export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      'Gambetta-Regular': ['Gambetta-Regular',]

    }
    , extend: {
      colors: {
        'C3b091': '#C3b091',
      }
    },
  },
  plugins: [flowbite.plugin(),],
}


const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // backgroundColor: ["active"],
      // // ...
      borderColor: ["odd", "even"],
      // // ...
      textColor: ["odd", "even"],
    },
  },
  // variants: {
  //   extend: {
  //     textColor: ["odd"],
  //   },
  // },
  plugins: [flowbite.plugin()],
};

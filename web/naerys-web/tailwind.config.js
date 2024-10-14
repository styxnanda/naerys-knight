const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg-image": "url('/src/assets/ASOIAF-Houses.jpg')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

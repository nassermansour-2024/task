/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
    "./js/flowbite.min.js"

  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}


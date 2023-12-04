/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],

  theme: {
    fontFamily:{
        sans:['Rubik','Montserrat','sans-serif']
    },
    extend: {
      fontFamily:{
        heading:['Padauk','sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}


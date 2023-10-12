/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:"Playfair Display, sans-serif"
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgb(249, 148, 23,0.9), rgb(238, 147, 34,0.1)), url('https://i.ibb.co/ZJWyksj/2011-i211-020-pyrotechnics-fireworks-realistic-background.jpg')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
   
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.webkit-height': {
          height: '-webkit-fill-available',
        },
        '.webkit-width': {
          width: '-webkit-fill-available',
        },

      };
      addUtilities(newUtilities, ['webkit-height','webkit-width']);
    },
  ],
}
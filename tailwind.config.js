/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#CA38ED',
          200: '#E487FB',
          300: '#3E1149'
        },
        gray: {
          200: '#574E5A',
          100: '#BCB1BF'
        }
      },
      fontFamily: {
        'poppins' : ['Poppins'],
        'roboto' : ['Roboto']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}


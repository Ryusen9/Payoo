/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'system-ui']
    },
    extend: {},
  },
  plugins: [require('preline/plugin'), require('daisyui'),],
}
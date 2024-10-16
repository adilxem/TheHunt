/** @type {import('tailwindcss').Config} */
export default {
  content: [

    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{

        'congress-blue': {
        '50': '#f1f7fe',
        '100': '#e2effc',
        '200': '#bedef9',
        '300': '#85c3f4',
        '400': '#44a6ec',
        '500': '#1b8adc',
        '600': '#0e6cbb',
        '700': '#0d5697',
        '800': '#0f4c81',
        '900': '#123e68',
        '950': '#0c2745',
        },

        'bright-sun': {
        '50': '#fefcec',
        '100': '#fcf6c9',
        '200': '#f9ec8e',
        '300': '#f5dd54',
        '400': '#f4d03f',
        '500': '#ecad14',
        '600': '#d1860e',
        '700': '#ae610f',
        '800': '#8d4b13',
        '900': '#743e13',
        '950': '#432005',
        },
    
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        md: '16px',
      },
      colors: {
        primary: {
          VeryDarkBlue: 'hsl(243, 87%, 12%)',
          DesaturatedBlue: 'hsl(238, 22%, 44%)',
          BirghtBlue: 'hsl(224, 93%, 58%)',
          ModerateCyan: 'hsl(170, 45%, 43%)',
        },
        neutral: {
          LightGrayishBlue: 'hsl(240, 75%, 98%)',
          LightGray: 'hsl(0, 0%, 75%)',
        },
      },
    },
  },
  plugins: [],
};

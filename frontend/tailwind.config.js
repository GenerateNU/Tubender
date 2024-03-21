/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'off': { 'white': '#ecf1f6' },
        'white-hover': '#DBE4EF',
        'brand': {
          'blue': {
            'light': '#778DA9',
            DEFAULT: '#2D3142',
            'dark': '#272932',
          },
          'orange': '#EB5E28',
          'white': '#FFFFFF',
          'light-grey': '#C4C4C4',
        },
        'error': {
          'red': '#CA0707'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'gothic': ['All Round Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


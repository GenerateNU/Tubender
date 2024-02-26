/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'off': { 'white': '#ecf1f6' },
        'brand': {
          'blue': {
            'light': '#778DA9',
            DEFAULT: '#2D3142',
            'dark': '#272932',
          },
          'orange': '#EB5E28',
          'white': '#FFFFFF',
        },
        'error': {
          'red': '#CA0707'
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
            'temp': '#008CFF',
            'baby': '#95CFFF',
          },
          'orange': '#EB5E28',
          'white': {
            DEFAULT: '#FFFFFF',
            'hover': '#DBE4EF'
          },
          'light-grey': '#C4C4C4',
          'teal': '#00ADB5',
        },
        'error': {
          'red': '#CA0707'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'splash-background': "url('./images/splash_bg.svg')",
        'arrow-background': "url('./images/arrow_bg.svg')",
      }
    },
  },
  plugins: [],
}


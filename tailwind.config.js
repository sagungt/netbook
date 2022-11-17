/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    './node_modules/flowbite/**/*.js',
    './dist/index.html'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1170px'
      },
      padding: '20px'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#217BF4',
        heading: '#0A093D',
        paragraph: '#656464'
      },
      boxShadow: {
        primary: '0px 7px 22px -12px rgba(33, 123, 244, 0.34)',
        thumbnail: '-5px 4px 14px rgba(151, 151, 151, 0.28)',
        card: '0px 26px 49px rgba(146, 165, 184, 0.14)',
        icon: '0px 10px 22px -10px transparent'
      },
      spacing: {
        '4.5': '1.125rem', /* 18px */
        '10.5': '2.625rem', /* 42px */
        18: '4.5rem' /* 72px */
      },
      borderRadius: {
        custom: '0.875rem', /* 14px */
      }
    },
  },
}

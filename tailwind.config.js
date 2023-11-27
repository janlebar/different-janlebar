/** @type {import('tailwindcss').Config} */
export default {
  theme: {
  },

  plugins: [
    '~/plugins/vimeo-player.js',
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}

module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundColor: theme => theme('colors'),
      // https://coolors.co/353535-3c6e71-ffffff-d9d9d9-284b63
      colors: {
        black: '#000',
        white: '#fff',
        error: '#ff1b37',
        success: '#05c470',

        primary: {
          300: '#525252',
          500: '#353535',
          700: '#292929'
        },

        secondary: {
          300: '#4d9093',
          500: '#3c6e71',
          700: '#315b5e'
        }
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: []
};

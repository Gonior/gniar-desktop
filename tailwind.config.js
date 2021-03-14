
module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        "width" : "width"
      },
      fontFamily : {
        'sans' : ['Quicksand', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
      opacity : ['disabled']
    },
  },
  plugins: [],
}

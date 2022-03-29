const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat'],
      },
      colors: {
        amber: {
          50: "#FEFAF2",
          200: '#FFE299',
          400: '#F3BC54',
        },
        coral: '#FEEADC',
        tapestry: {
          50: '#BD90AA',
          100: '#9D4F7C',
        },
        givry: '#F8CDBA',
        blossom: '#D6ABC4',
      }
    },
  },
  plugins: [],
}

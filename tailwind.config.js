module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: "#FEFAF2"
        },
        coral: '#FEEADC',
        tapestry: {
          50: '#BD90AA',
          100: '#9D4F7C',
        }
      }
    },
  },
  plugins: [],
}

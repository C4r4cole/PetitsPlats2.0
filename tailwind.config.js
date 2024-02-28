/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}"],
  theme: {
    fontFamily: {
      anton: "Anton",
      manrope: "Manrope",
    },
    extend: {
      colors: {
        yellow: "#FFD15B",
        grey: "#E5E5E5",
        grey2: "#7A7A7A",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

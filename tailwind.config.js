/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eb6c10",
        secondary: "#fc852d",
        accent: "#f5791f",
        bgmain: "#edf2f6",
      },
    },
    fontFamily: {
      sans: ["Montserrat"],
      heading: ["Poppins"],
      logo: ["Handlee"],
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        Poppins: "Poppins"
      },
      colors: {
        'primary': "#0D1117",
        'custom-gradient': 'linear-gradient(90deg, rgba(76, 165, 255, 1) 2.34%, rgba(182, 115, 248, 1) 100.78%)',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


//   "primary-500": "#877EFF",
//"secondary-500": "#FFB620",
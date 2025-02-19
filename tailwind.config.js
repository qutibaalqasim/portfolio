/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      mainbg : "#000000",
      navLink: "#959595",
      footerBg: "#707070"
     },
     screens:{
      "2md": "850px",
     }
    },
  },
  plugins: [],
}


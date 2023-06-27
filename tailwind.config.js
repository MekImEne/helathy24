/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      GRAY: "#C4C4C4",
      BLACK: "#000000",  
      WHITE: "#FFFFFF",
      TRANSPARENT: "transparent",
      BLUE: "#0B65A7",
      BLUE2: "#005EA3",
      BLUE3:"#1678F2",
      BLUE4:"#65A8FB",
      TEXT_GREY:"#1E1E1E",
      ORANGE: "#F27219",
      GRAY_BACKGROUND: "#F4F7FA",
      DARK_GRAY: "#3A3B3B",
      BORDER_GRAY: "#AFAFA",
      LIGHT_GRAY:"#EBEBEB",
      COPYRIGHT_GRAY:"#685879",
      FOOTER_GRAY:"#190134",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};


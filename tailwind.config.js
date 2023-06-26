/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      PRIMARY: "#20507a",
      DARK_PRIMARY: "#123034",
      LIGHT_PRIMARY: "#0f70b7",
      SECONDARY: "#f38127",
      LIGHT_SECONDARY:"#fa983a",
      TEXT: "#333333",
      BLACK: "#000000",
      BACKGROUND: "#FFFFFF",
      LIGHT_GRAY: "#eeeeee",
      DARK_GRAY: "#485460",
      GRAY: "#cfd8dc",
      CLOUDS:'#fafcfb',
      RED: "#D32F2F",
      REDISH: "#FF0000",
      NEUTRAL:"#737373",
      transparent: "transparent",
      PURPLE: "#1F2B50",
      FACEBOOK: "#4267B2",
      YOUTUBE: "#FF0000",
      TWITTER: "#1DA1F2",
      INSTAGRAM: "#E1306C",
      LINKEDIN: "#0A66C2",
      BLUE:'#0275d8',
      GREEN:"#5cb85c"
  
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


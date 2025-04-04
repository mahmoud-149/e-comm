/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        HeroText: "#ffffff",
        Herobutton: "#ffffff",
        HoverHeroButton: "#000000",
        MainText: "#000000",
        MainButton: "#0084d6",
        p: "#6f6670",
      },
      fontFamily: {
        MainFont: ["Lato", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out",
        slideIn: "slideIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
});

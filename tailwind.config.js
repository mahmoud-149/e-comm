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
    },
  },
  plugins: [],
});

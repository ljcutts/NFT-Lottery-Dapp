module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "rgb(31, 199, 212)",
        icons: "rgb(122, 110, 170)",
        purple: "rgb(118, 69, 217)",
        navBottom: "rgb(231, 227, 235)",
        siteBackground: "#e8f4f7",
      },
      boxShadow: {
        button: "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",
      },
      spacing: {
        514: "514px",
        102: "102px",
        412: "412px",
        294: "294px",
        433: "433px",
        409: "409px",
        375: "375px",
        350: "350px",
      },
    },
  },
  plugins: [],
};

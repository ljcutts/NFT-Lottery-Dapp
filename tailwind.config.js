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
        purple: 'rgb(118, 69, 217)',
        navBottom: "rgb(231, 227, 235)",
        siteBackground: "#e8f4f7",
      },
      boxShadow: {
        button: "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",
      },
    },
  },
  plugins: [],
};

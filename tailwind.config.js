module.exports = {
    content: [
      "./index.html",
      "./css/**/*.{html,js,css}",
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["dark", "light"], // Add the themes you want to use
    },
  };
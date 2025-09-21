module.exports = {
    content: [
      "./index.html",
      "./css/**/*.{html,js,css}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Inclusive Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [require("daisyui")],
  };
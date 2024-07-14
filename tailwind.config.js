/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,md}"],
    theme: {
      extend: {
        colors: {
            agmatics:{
                usertext: "#3E3733",
                aitext: "#2F1F08",
                promptarea: "#363331"
            }
        },
      },
    },

    plugins: [],
  };
  
 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('./sources/bg_main.gif')",
        }
      },
    },
    plugins: [],
  }
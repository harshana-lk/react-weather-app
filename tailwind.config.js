/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-background": "#131214",
        "secondary-background": "#1d1c1f",
        "sub-background": "#1a191c",
      },
    },
  },
  plugins: [],
};

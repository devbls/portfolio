/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-500": "#986dff",
        "purple-600": "#8257e6",
        "black-400": "#1A1A2B",
        "black-500": "#13131F",
        gray: "#9ca3af",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dm: ["DM Sans Variable", "serif"],
      },
    },
  },
  plugins: [],
};

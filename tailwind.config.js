/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-500": "#986dff",
        "purple-600": "#8257e6",
        black: "#13131F",
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

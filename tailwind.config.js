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
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-left": "slideInLeft 1.2s ease-out forwards",
        "slide-in-right": "slideInRight 1.2s ease-out forwards",
        "slide-in-top": "slideInTop 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

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
        montserrat: ["Montserrat", "sans-serif"],
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
        aura: {
          "0%, 100%": {
            opacity: 0.2,
            transform: "scale(1) translate(0, 0)",
          },
          "33%": {
            opacity: 0.4,
            transform: "scale(1.2) translate(10%, 10%)",
          },
          "66%": {
            opacity: 0.3,
            transform: "scale(0.8) translate(-10%, 5%)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "slide-in-left": "slideInLeft 1.2s ease-out forwards",
        "slide-in-right": "slideInRight 1.2s ease-out forwards",
        "slide-in-top": "slideInTop 1.2s ease-out forwards",
        "aura-slow": "aura 15s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

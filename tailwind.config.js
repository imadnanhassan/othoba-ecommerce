/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
        accent: "#657786",
        background: "#F5F8FA",
        surface: "#FFFFFF",
        error: "#E0245E",

        lightBg: "#F2F6F9",
        darkBg: "#141414",
        lightText: "#333333",
        darkText: "#FFFFFF",

        uxBgMain: "#f3f2f7",
        uxBgPurpole: "#9559F7",
        uxBgMenu: "#9559F7 ",
        uxBgGreen: "#30D350",
        uxBgYellow: "#FFA800",
        uxBgPink: "#FE3E9B",
        uxBgRed: "#FF3B30",
        uxSecoundryBg1: "#79777D",
        uxSecoundryBg2: "#292933",
        uxLightBgIcon: "#e5dbf7",
        uxLightTextIcon: "#9559F7",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      scrollbar: ["rounded"],
      // fontFamily: {
      //   primary: ["Roboto Condensed", "sans-serif"],
      // },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 4px 6px rgba(0, 0, 0, 0.6)",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, #559ED8, #1D61AD)",
        uxGradientGraytoPurpole: "linear-gradient(135deg, #292933, #9559F7)",
        uxGradientGraytoPurpoleToRight:
          "linear-gradient(to right, #292933 30%, #9559F7 70%)",
        uxGradientGraytoPurpoleCircle:
          "radial-gradient(circle, #292933, #9559F7)",
      },
      keyframes: {
        vibrate: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-2px)" },
          "40%, 80%": { transform: "translateX(2px)" },
        },
      },
      animation: {
        vibrate: "vibrate 0.3s ease-in-out infinite",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};

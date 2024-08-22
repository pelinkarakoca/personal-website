//prettier-ignore

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        /*, */
        customGreen: `rgba(var(--color-green))`,
        customPurple: "rgba(var(--color-purple))",
        customWhite: "rgba(var(--color-white))",
        customPurple2: "rgba(var(--color-purple-2))",
        customToggleButton: "rgba(var(--color-toggle-button))",
        customSwitch: "rgba(var(--color-switch))",
        customBg1: `rgba(var(--color-bg-primary))`,
        customBg2: `rgba(var(--color-bg-secondary))`,
customYellow: "rgba(var(--color-yellow))",
      },
      backgroundImage: {
        bgGradient: "var(--color-bkg)",
      },
    },
  },
  plugins: [],
};

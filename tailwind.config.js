export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        darkPurple: "rgba(71, 49, 211, 1)",
        buttonBlue: "rgba(55, 48, 163, 1)",
        green: "rgba(203, 242, 129, 1)",
        lightPurple: "rgba(143, 136, 255, 1)",
        yellow: "rgba(255, 232, 110, 1)",
        white: "rgba(255, 255, 255, 1)",
        black: "",
      },
      backgroundImage: {
        "gradient-light": "linear-gradient(to right, #4731D3 60%, #CBF281 40%)",
        "gradient-dark": "linear-gradient(to right, #171043 60%, #252128 40%)",
      },
    },
  },
  plugins: [],
};

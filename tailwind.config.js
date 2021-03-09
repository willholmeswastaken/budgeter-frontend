module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          light: "#ACFFBA",
          DEFAULT: "#11CC5C",
          dark: "#0DA040",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

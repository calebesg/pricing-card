module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayish: {
          100: 'hsl(240, 78%, 98%)',
          200: 'hsl(234, 14%, 74%)',
          400: 'hsl(233, 13%, 49%)',
          600: 'hsl(232, 13%, 33%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

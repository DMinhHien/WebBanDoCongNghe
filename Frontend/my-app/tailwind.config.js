/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'segoe-bold': ['"Segoe UI Bold"'],
        'segoe-italic': ['"Segoe UI Italic"'],
        'segoe-bold-italic': ['"Segoe UI Bold Italic"'],
      },
    },
  },
  plugins: [],
};

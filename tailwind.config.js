/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: "#272727",
        secondary: "#535353",
        tertiary: "#414042",
        themeRed: '#C2202B',
      }
    },
  },
  plugins: [],
};

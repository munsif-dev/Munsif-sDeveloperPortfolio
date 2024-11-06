/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Adjust this path if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
        potta: ["Potta One", "cursive"],
      },
      colors: {
        dark: "#003945",
        light: "#E0FFF4",
        primary: "#3EB5AF",
        primaryDark: "#BAE256",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(#003945 ,#E0FFF4 5px, #E0FFF4 100px)",
        circularDark: "repeating-radial-gradient(#E0FFF4 4px, #003945 100px)",
      },
    },
  },
  plugins: [],
};

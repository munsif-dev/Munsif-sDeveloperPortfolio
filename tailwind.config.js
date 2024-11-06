/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mont: ["var(--font-mont)"],
        pop: ["var(--font-pop)"],
        potta: ["Potta One", "cursive"],
      },
      colors: {
        dark: "#003945",
        light: "#E0FFF4",
        primary: "#3EB5AF", // 240,86,199
        primaryDark: "#BAE256", // 80,230,217
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

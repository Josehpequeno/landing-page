/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DFE4DC",
        secundary: "#7C7C7C",
        terciary: "#586979",
        dark: "#2B2F34"
      },
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"]
      }
    }
  },
  plugins: []
};

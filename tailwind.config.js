/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#150E28",
        headingColor: "#903AFF",
        textColor: "#D434FE",
        hotpink: '#FF26B9',
      },
    },
  },
  plugins: [],
}


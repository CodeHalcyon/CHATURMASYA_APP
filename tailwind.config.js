/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // <-- this is correct
  ],
  presets: [require("nativewind/preset")], // 👌
  theme: {
    extend: {},
  },
  plugins: [],
};

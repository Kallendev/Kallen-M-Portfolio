/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#00F0FF',
        'pink-accent': '#FF3366',
      },
    },
  },
  plugins: [],
};

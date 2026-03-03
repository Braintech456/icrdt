/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'navy-primary': '#0A1F44',
        'royal-blue': '#1B4FA3',
        'light-bg': '#F4F6F9',
      },
    },
  },
  plugins: [],
};

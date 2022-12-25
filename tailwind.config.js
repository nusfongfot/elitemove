/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'gray-light': '#A2A2A2',
        'gray-primary': '#26262A',
        'purple-p-400': '#984fff',
        'purple-p-500': '#8322FE',
        'purple-p-600': '#751cf7',
        'purple-p-700': '#630eef',
        'purple-p-800': '#5100ea',
      },
      screens: {
        'semi-lg': '824px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-500': '#3B82F6',
        'green-200': '#BBF7D0',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.odd\\:bg-white:nth-child(odd)': {
          backgroundColor: '#ffffff',
        },
        '.even\\:bg-gray-200:nth-child(even)': {
          backgroundColor: '#e5e7eb',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}


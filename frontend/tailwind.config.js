/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgba(239, 240, 244, 1)',
      },
      boxShadow: {
        'custom-xl': '2px 2px rgba(212, 212, 213, 1), -2px -2px white',
        'custom-photo-xl': '0 0 0 8px rgb(229 231 235)',
        'custom-photo-xl-2': '0 0 0 16px rgba(212, 212, 213, 1)',
        'inner-xl': 'inset 0 4px 10px -1px rgba(0, 0, 0, 0.1), inset 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 4px 0 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
    variants: {
    extend: {
      boxShadow: ['hover'], 
    },
  },
  },
  plugins: [],
};

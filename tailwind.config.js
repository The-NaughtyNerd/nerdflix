/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,tx,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        textPrimary: '#f5f5f5f5',
        textSecondary: '#050505',
      },

      fontFamily: {
        jarkata: [' "Plus Jakarta Sans" ', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

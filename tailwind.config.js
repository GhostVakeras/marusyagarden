/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ec',
          100: '#fdefd8',
          200: '#fcdfb1',
          300: '#fbd695', 
          400: '#f9c67e',
          500: '#f6b149',
          600: '#e79a20',
          700: '#b87d1a',
          800: '#8c5b0d',
          900: '#5e3d09',
        },
        secondary: {
          50: '#f1f8f4',
          100: '#dcefe3',
          200: '#bfe0ce',
          300: '#97caaf',
          400: '#68ac8a',
          500: '#488f6e',
          600: '#357556',
          700: '#2b5e46',
          800: '#244a39',
          900: '#1e3d30',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        carousel: 'carousel 30s linear infinite',
      },
    },
  },
  plugins: [],
};
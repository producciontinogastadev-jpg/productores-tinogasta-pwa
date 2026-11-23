/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      colors: {
        vinotinto: {
          50: '#fbf5f6',
          100: '#f7ebed',
          200: '#efd6da',
          300: '#e1b3bb',
          400: '#ce8593',
          500: '#b85d70',
          600: '#9e4357',
          700: '#823445',
          800: '#6c2e3b',
          900: '#5b2a34',
          950: '#34131b',
        },
      },
    },
  },
  plugins: [],
}


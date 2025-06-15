/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#FDF8F6',
          100: '#F2E8E5',
          200: '#EADDD7',
          300: '#E0CEC7',
          400: '#D2BAB0',
          500: '#BFA094',
          600: '#A18072',
          700: '#977669',
          800: '#846358',
          900: '#43302B',
        },
        gold: {
          50: '#FDFBEB',
          100: '#FCF7C7',
          200: '#F8EF8A',
          300: '#F5E74D',
          400: '#F2DF24',
          500: '#EFD70B',
          600: '#C7B309',
          700: '#9F8F07',
          800: '#776B05',
          900: '#4F4703',
        }
      },
    },
  },
  plugins: [],
};
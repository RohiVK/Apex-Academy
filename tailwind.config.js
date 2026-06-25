/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#B91C1C', // Crimson 700
          DEFAULT: '#991B1B', // Solid Crimson Red
          dark: '#7F1D1D', // Crimson 900
          hover: '#6B1111',
          cream: '#FDFBF7', // Warm Ivory/Cream
          navy: '#0F172A', // Midnight Navy
        },
        obsidian: {
          50: '#FDFBF7', // Warm Ivory/Cream
          100: '#F5F2EA', // Slightly darker cream for cards/borders
          200: '#EAE5D8',
          300: '#D5CDBC',
          400: '#9B907D',
          500: '#736B5C',
          600: '#565045',
          700: '#1E293B', // Deep Charcoal
          800: '#0F172A', // Midnight Navy
          850: '#0A0F1D',
          900: '#060A13',
          955: '#03050A',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Merriweather', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

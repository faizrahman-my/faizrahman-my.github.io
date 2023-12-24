/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'web': {
          both1: '#252422',
          both2: '#403D39',
          both3: '#FFFCF2',
          text1: '#EB5E28',
          back1: '#FFB800',
          back2: '#CCC5B9',
        },
        // ...
      },
      fontFamily: {
        'advent': ['Advent Pro', 'sans-serif'],
        'khand': ['Khand', 'sans-serif'],
      },
    },
    screens: {
      'min-sm': '640px',
      // => @media (min-width: 640px) { ... }

      'min-md': '768px',
      // => @media (min-width: 768px) { ... }

      'min-lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'min-xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'min-2xl': '1536px',
      // => @media (min-width: 1536px) { ... }


      'max-sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }

      'max-md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'max-lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'max-xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'max-2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }
    },
  },
  plugins: [],
}


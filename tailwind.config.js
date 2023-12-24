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
  plugins: [require("daisyui")],
  daisyui: {
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}


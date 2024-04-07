import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '340px',
      'xs': '449px',

      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '800px',
      // => @media (min-width: 800px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      keyframes: {
        'lgScreenMove': {
          to: { transform: 'translateX(calc(-100% + 2.7rem))' },
        },
        'mdScreenMove': {
          to: { transform: 'translateX(calc(-100% - .8rem))' },
        },
        'smScreenMove': {
          to: { transform: 'translateX(calc(-100% - 5.5rem))' },
        },
      },
      animation: {
        smScreenMove: 'smScreenMove 30s linear infinite',
        mdScreenMove: 'mdScreenMove 30s linear infinite',
        lgScreenMove: 'lgScreenMove 30s linear infinite',
      },
      colors: {
        'dark-primary': '#121212',
        'dark-secondary': '#18181b'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;

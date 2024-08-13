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
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      keyframes: {
        'lgScreenMove': {
          to: { transform: 'translateX(calc(-150% - 4.7rem))' },
        },
        'mdScreenMove': {
          to: { transform: 'translateX(calc(-150% - 6.7rem ))' },
        },
        'smScreenMove': {
          to: { transform: 'translateX(calc(-150% - 22rem))' },
        },
        'xsScreenMove': {
          to: { transform: 'translateX(calc(-150% - 10rem))' },
        },
        'slideRight': {
          from: { transform: 'translatex(calc(-100% - 2.6rem))' },
          to: { transform: 'translatex(0%)' },
        },
        'slideLeft': {
          from: { transform: 'translatex(0%)' },
          to: { transform: 'translatex(calc(-100% - 2.6rem))' },
        },
        'screenMove': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-100%)' }
        },
      },
      animation: {
        slideRight: 'slideRight 1s ease-in-out forwards',
        slideLeft: 'slideLeft 1s ease-in-out forwards',
        xsScreenMove: 'xsScreenMove 40s linear infinite',
        smScreenMove: 'smScreenMove 40s linear infinite',
        mdScreenMove: 'mdScreenMove 40s linear infinite',
        lgScreenMove: 'lgScreenMove 40s linear infinite',
        screenMove: 'screenMove 30s linear infinite',
      },
      colors: {
        'dark-primary': '#121212',
        'dark-secondary': '#18181b'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: 'class',
};
export default config;

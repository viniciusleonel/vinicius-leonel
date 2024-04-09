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
      'md': '800px',
      'lg': '1440px',
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
      },
      animation: {
        xsScreenMove: 'xsScreenMove 25s linear infinite',
        smScreenMove: 'smScreenMove 35s linear infinite',
        mdScreenMove: 'mdScreenMove 40s linear infinite',
        lgScreenMove: 'lgScreenMove 40s linear infinite',
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px', // 27 inç monitörler için
    },
    extend: {
      maxWidth: {
        'screen-xl': '1280px',  // Normal ekranlar için
        'screen-2xl': '1536px', // Büyük ekranlar için
        'screen-3xl': '1800px', // 27 inç monitörler için
      }
    },
  },
  plugins: [],
} 
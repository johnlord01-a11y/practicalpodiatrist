import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0F1419',
        surface: '#1A2332',
        primary: '#06B6D4',
        accent: '#2DD4BF',
        text: '#F1F5F9',
        muted: '#94A3B8'
      }
    }
  }
} satisfies Config;

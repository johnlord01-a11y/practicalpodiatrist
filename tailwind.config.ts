import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdb,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#020617',
        surface: '#0f172a',
        primary: '#3b82f6',
        accent: '#f43f5e',
      },
    },
  },
  plugins: [],
} satisfies Config;

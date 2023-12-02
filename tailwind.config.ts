import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'Arial', 'system-ui', 'sans-serif'],
      title: ['Cabin Sketch', 'Roboto', 'sans-serif'],
    },
    extend: {
      keyframes: {
        bgGradient: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '400% center' },
        },
      },
      animation: {
        bgGradient: 'bgGradient 14s linear infinite',
      },
      backgroundImage: {
        'gradient-90': 'linear-gradient(90deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;

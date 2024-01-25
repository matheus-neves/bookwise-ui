import type { Config } from 'tailwindcss'
import lineClampPlugin from '@tailwindcss/line-clamp'

export default {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif']
      },
      colors: {
        green: {
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },
  
        purple: {
          100: '#8381D9',
          200: '#2A2879',
        },
  
        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        },
      },

      backgroundImage: {
        'linear': 'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
        'vertical': 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
      }
    },
  },
  plugins: [lineClampPlugin]
} as const satisfies Config 


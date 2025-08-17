import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#F9DDE1',
          mint: '#D6F5E5',
          yellow: '#FFF4CC',
          lavender: '#EDE7F6'
        }
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: []
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        muted: '#888888',
        subtle: '#666666',
        border: '#e5e5e5',
        'border-light': '#e0e0e0',
        surface: '#fafafa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'label': ['11px', { letterSpacing: '0.1em' }],
      },
      borderWidth: {
        'hairline': '0.5px',
      },
    },
  },
  plugins: [],
}

export default config
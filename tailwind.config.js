/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#070708',
        panel: '#101114',
        soft: '#181a20',
        line: 'rgba(255,255,255,0.10)',
        cream: '#f5f1e8',
        muted: '#a0a0aa',
        lime: '#d7ff3f',
        cyan: '#5cc8f0',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}

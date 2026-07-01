/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#061225',
        navy: '#07162e',
        ocean: '#0b2a4a',
        gold: '#d8b75e',
        champagne: '#f6e7bd',
        mist: '#ecf4ff',
      },
      boxShadow: {
        glow: '0 22px 80px rgba(216, 183, 94, 0.22)',
        card: '0 18px 55px rgba(4, 15, 34, 0.16)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

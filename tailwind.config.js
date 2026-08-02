/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#080B10',
          900: '#0C1017',
          800: '#12171F',
          700: '#1B222D',
          600: '#2A3340',
        },
        ink: {
          100: '#F4F6F8',
          300: '#C7CED8',
          500: '#8791A1',
          700: '#5A6478',
        },
        route: {
          400: '#7AA2FF',
          500: '#4C7EFF',
          600: '#3763DB',
        },
        signal: {
          400: '#E8B75D',
          500: '#D9A143',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.4)' },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
        dash: 'dash 2.6s linear forwards',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

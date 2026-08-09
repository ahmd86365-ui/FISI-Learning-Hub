/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        brand: {
          50: '#F0F1FE',
          100: '#E1E4FD',
          200: '#C3C9FB',
          300: '#9CA5F7',
          400: '#6C79F0',
          500: '#4A56E3',
          600: '#3A42C4',
          700: '#2E339D',
          800: '#262A7D',
          900: '#1F2266',
          950: '#14163F',
        },
        ink: {
          50: '#F7F8FA',
          100: '#EEF0F3',
          200: '#DCE0E6',
          300: '#B9C0CC',
          400: '#8B95A5',
          500: '#5F6B7D',
          600: '#454F60',
          700: '#313A49',
          800: '#1E2530',
          850: '#161B24',
          900: '#10141C',
          950: '#0A0D13',
        },
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)',
        card: '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 8px 24px -8px rgb(15 23 42 / 0.10)',
        'card-hover': '0 2px 4px 0 rgb(15 23 42 / 0.06), 0 16px 32px -12px rgb(15 23 42 / 0.16)',
        'card-dark': '0 1px 2px 0 rgb(0 0 0 / 0.20), 0 8px 24px -8px rgb(0 0 0 / 0.40)',
        'card-hover-dark': '0 2px 4px 0 rgb(0 0 0 / 0.24), 0 16px 40px -12px rgb(0 0 0 / 0.55)',
        glow: '0 0 0 1px rgb(74 86 227 / 0.12), 0 8px 30px -8px rgb(74 86 227 / 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInSlow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        fadeInSlow: 'fadeInSlow 0.7s ease-out both',
        scaleIn: 'scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) both',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      maxWidth: {
        content: '80rem',
      },
    },
  },
  plugins: [],
}

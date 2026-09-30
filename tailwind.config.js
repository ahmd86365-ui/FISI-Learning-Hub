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
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        ink: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          850: '#172033',
          900: '#0F172A',
          950: '#08111F',
        },
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(15 23 42 / 0.04)',
        card: '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 3px 10px -6px rgb(15 23 42 / 0.12)',
        'card-hover': '0 2px 4px 0 rgb(15 23 42 / 0.06), 0 8px 20px -10px rgb(15 23 42 / 0.18)',
        'card-dark': '0 1px 2px 0 rgb(0 0 0 / 0.20), 0 8px 24px -8px rgb(0 0 0 / 0.40)',
        'card-hover-dark': '0 2px 4px 0 rgb(0 0 0 / 0.24), 0 16px 40px -12px rgb(0 0 0 / 0.55)',
        glow: '0 0 0 1px rgb(37 99 235 / 0.16), 0 6px 18px -8px rgb(37 99 235 / 0.35)',
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

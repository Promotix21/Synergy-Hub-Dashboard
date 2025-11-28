import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme
        light: {
          bg: '#F8F9FA',
          card: '#FFFFFF',
          primary: '#6366F1',
          secondary: '#3B82F6',
          accent1: '#EC4899',
          accent2: '#F97316',
          text: {
            primary: '#1A1A1A',
            secondary: '#6B7280',
            tertiary: '#9CA3AF',
          },
          border: '#E5E7EB',
        },
        // Dark theme
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
          primary: '#818CF8',
          secondary: '#60A5FA',
          accent1: '#F472B6',
          accent2: '#FB923C',
          text: {
            primary: '#F8FAFC',
            secondary: '#CBD5E1',
            tertiary: '#94A3B8',
          },
          border: '#334155',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      fontSize: {
        'h1': '32px',
        'h2': '24px',
        'h3': '20px',
        'body': '15px',
        'small': '13px',
        'metric': '28px',
      },
      spacing: {
        '18': '4.5rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      boxShadow: {
        'neumorphic-light': '8px 8px 16px rgba(209, 205, 199, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.9)',
        'neumorphic-dark': '8px 8px 16px rgba(0, 0, 0, 0.3), -8px -8px 16px rgba(68, 64, 61, 0.1)',
        'card-hover': '0 12px 24px -8px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'fade-down': 'fade-down 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'fade-up': 'fade-up 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-in': 'scale-in 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config

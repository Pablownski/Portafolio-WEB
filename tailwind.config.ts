import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050816',
          secondary: '#0f172a',
          tertiary: '#111827',
        },
        accent: {
          purple: '#1d4ed8',
          violet: '#3b82f6',
          blue: '#0ea5e9',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'orbit': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit 25s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(29, 78, 216, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(110px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(110px) rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at top, #071e3d 0%, #050816 60%)',
      },
    },
  },
  plugins: [],
}

export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#080707',
          900: '#140b0d',
          800: '#1d1214',
          700: '#2a1719',
          600: '#341b21',
        },
        cyan: {
          glow: '#ff5a5f',
          soft: '#ff7b7b',
        },
        violet: {
          glow: '#7f1d1d',
          deep: '#450a0a',
        },
      },
      fontFamily: {
        syne: ['"Syne"', 'sans-serif'],
        display: ['"Orbitron"', '"Rajdhani"', 'sans-serif'],
        body: ['"Rajdhani"', '"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, rgba(8,7,7,0) 0%, rgba(8,7,7,0.92) 100%), linear-gradient(90deg, rgba(248,113,113,0.08) 1px, transparent 1px), linear-gradient(rgba(248,113,113,0.08) 1px, transparent 1px)',
        mesh: 'radial-gradient(circle at top left, rgba(248,113,113,0.18), transparent 30%), radial-gradient(circle at 80% 0%, rgba(127,29,29,0.22), transparent 35%), linear-gradient(135deg, rgba(248,113,113,0.04), transparent 45%)',
      },
      backgroundSize: {
        grid: '100% 100%, 56px 56px, 56px 56px',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(248,113,113,0.3)',
        'glow-strong': '0 0 60px -10px rgba(248,113,113,0.35)',
        card: '0 24px 70px -28px rgba(2,6,23,0.9)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        drift: 'drift 14s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(24px, -18px, 0) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}

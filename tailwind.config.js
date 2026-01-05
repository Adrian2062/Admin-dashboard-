export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        midnight: {
          950: '#0a0a12',
          900: '#14141f',
          800: '#1f1f2e',
        },
        charcoal: {
          950: '#0f1115',
          900: '#181b21',
          800: '#232730',
        },
        'neon-purple': {
          DEFAULT: '#b026ff',
          glow: 'rgba(176, 38, 255, 0.5)',
        },
        'neon-blue': {
          DEFAULT: '#3b82f6',
          glow: 'rgba(59, 130, 246, 0.5)',
        },
        glass: {
          border: 'rgba(255, 255, 255, 0.08)',
          surface: 'rgba(255, 255, 255, 0.03)',
          highlight: 'rgba(255, 255, 255, 0.1)',
        }
      },
      backgroundImage: {
        'antigravity-gradient': 'linear-gradient(135deg, #0f1115 0%, #14141f 50%, #1f1f2e 100%)',
      },
      boxShadow: {
        'glass-sm': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'glass-md': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'neon-glow': '0 0 10px rgba(176, 38, 255, 0.3), 0 0 20px rgba(176, 38, 255, 0.1)',
      }
    },
  },
  plugins: [],
}

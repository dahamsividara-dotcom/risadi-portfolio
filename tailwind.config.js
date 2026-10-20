/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#05070e',
          900: '#080B16', // Primary deep midnight navy background
          800: '#0d1322',
        },
        surface: {
          DEFAULT: '#111827', // Subtle dark charcoal/navy cards
          hover: '#172033',
          border: '#1F2937',
          borderLight: '#374151',
        },
        accent: {
          purple: '#8B5CF6', // Primary purple accent
          purpleHover: '#7C3AED',
          purpleGlow: 'rgba(139, 92, 246, 0.25)',
          blue: '#38BDF8', // Secondary light blue accent
          blueHover: '#0EA5E9',
          blueGlow: 'rgba(56, 189, 248, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 6px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.6), 0 4px 12px -2px rgba(0, 0, 0, 0.3)',
        'purple-soft': '0 4px 24px -2px rgba(139, 92, 246, 0.25)',
        'blue-soft': '0 4px 24px -2px rgba(56, 189, 248, 0.25)',
      }
    },
  },
  plugins: [],
}

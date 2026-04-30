/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0E0F12',
        cream: '#FFFCF0',
        brand: {
          50: '#FFFCF0',
          100: '#F5E8B5',
          400: '#FFD936',
          500: '#F5C518',
          600: '#E89500',
          700: '#C49A0E',
          800: '#8B6914'
        },
        orange: {
          500: '#F38020'
        },
        sky: {
          500: '#4A90E2'
        },
        coral: {
          500: '#E84545'
        },
        mint: {
          500: '#5BB85B'
        },
        violet: {
          500: '#8B5BB5'
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        'block': '0 4px 0 #0E0F12',
        'block-hover': '0 6px 0 #0E0F12',
        'block-active': '0 1px 0 #0E0F12',
        'block-lg': '0 6px 0 #0E0F12'
      }
    }
  },
  plugins: []
};

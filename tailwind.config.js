/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      animation: {
        'move-circles': 'move-circles 8s ease-in-out infinite',
      },
      keyframes: {
        'move-circles': {
          '0%, 100%': { transform: 'translate(-10%, -10%) scale(1)' },
          '50%': { transform: 'translate(10%, 10%) scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}


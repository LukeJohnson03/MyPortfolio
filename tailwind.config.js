/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      animation: {
        'move-circles': 'move-circles 8s ease-in-out infinite',
        'fade-in': 'fadeIn 3s ease-in forwards', // Add the fade-in animation
      },
      keyframes: {
        'move-circles': {
          '0%, 100%': { transform: 'translate(-10%, -10%) scale(1)' },
          '50%': { transform: 'translate(10%, 10%) scale(1.2)' },
        },
        fadeIn: { // Add keyframes for fade-in
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

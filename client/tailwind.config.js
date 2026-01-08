/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'moon-gray': '#1a1a1a',
        'moon-silver': '#C0C0C0',
        'moon-blue': '#1E3A8A',
        'moon-gold': '#FFD700',
      },
      backgroundImage: {
        'gradient-moon': 'linear-gradient(to bottom, #1a1a1a, #000000)',
        'gradient-gold': 'linear-gradient(to right, #FFD700, #FFA500)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      dropShadow: {
        'glow': '0 0 8px rgba(229, 200, 241, 0.7)',
      },
    },
  },
  plugins: [],
}
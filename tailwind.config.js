/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['Exo', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#121212',
        'secondary-dark': '#1E1E1E',
        'section-dark': '#222222',
        'primary-text': '#FFFFFF',
        'secondary-text': '#B0B0B0',
        'muted-text': '#6D6D6D',
        'electric-blue': '#00D4FF',
        'neon-purple': '#9B59B6',
        'teal-green': '#1ABC9C',
        'magenta-pink': '#FF007F',
      },
      animation: {
        'gradient-shift': 'gradient-shift 5s ease infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-in',
        'typewriter': 'typewriter 2s steps(40, end)',
        'flicker': 'flicker 1.5s infinite alternate',
      },
      keyframes: {
        'gradient-shift': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
        'glow': {
          '0%': {
            'text-shadow': '0 0 5px #00D4FF',
          },
          '100%': {
            'text-shadow': '0 0 20px #00D4FF',
          },
        },
        'bounce-in': {
          '0%': {
            'transform': 'scale(0.9)',
            'opacity': 0,
          },
          '50%': {
            'transform': 'scale(1.1)',
            'opacity': 1,
          },
          '100%': {
            'transform': 'scale(1)',
            'opacity': 1,
          },
        },
        'fade-in': {
          '0%': {
            'opacity': 0,
          },
          '100%': {
            'opacity': 1,
          },
        },
        'typewriter': {
          'from': {
            'width': '0',
          },
          'to': {
            'width': '100%',
          },
        },
        'flicker': {
          '0%': {
            'opacity': 0.5,
          },
          '100%': {
            'opacity': 1,
          },
        },
      },
    },
  },
  plugins: [],
}

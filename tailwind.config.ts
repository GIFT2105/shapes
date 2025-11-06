import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
      },
      colors: {
        'neon-cyan': '#00F0FF',
        'neon-pink': '#FF007A',
        'neon-yellow': '#FAFF00',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px #00F0FF',
        'neon-pink': '0 0 20px #FF007A',
        'neon-yellow': '0 0 20px #FAFF00',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00F0FF, 0 0 40px #00F0FF' },
          'to': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00F0FF, 0 0 20px #00F0FF' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
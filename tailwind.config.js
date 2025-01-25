/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      animation: {
        spin: " spin 2s linear 1 ",
        blink: 'blink 1s 15',
        spin2: "spin 2s linear infinite"

      },
      keyframes: {
        spin: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        spin2: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },
    
      },
      transform: {
        "rotate-y-180": "rotateY(180deg)",
      },
    },
  },
  plugins: [],
}
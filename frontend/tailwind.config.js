/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideBackground: {
          '0%': { backgroundImage: "url('/images/ima.jpg')" },
          '20%': { backgroundImage: "url('/images/nda.jpg')" },
          '40%': { backgroundImage: "url('/images/ota.jpg')" },
          '60%': { backgroundImage: "url('/images/afa.jpg')" },
          '80%': { backgroundImage: "url('/images/ina.jpg')" },
          '100%': { backgroundImage: "url('/images/ima.jpg')" },
        },
      },
      animation: {
        'bg-slide': 'slideBackground 10s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
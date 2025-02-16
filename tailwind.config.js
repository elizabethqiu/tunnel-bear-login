/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tunnel-bear': '#cce08b',
      },
      ringColor: {
        'tunnel-bear': '#cce08b',
      },
      outlineColor: {
        'tunnel-bear': '#cce08b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

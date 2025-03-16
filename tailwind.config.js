/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3490dc', // Un color azul primario
          secondary: '#f6993f', // Un color naranja secundario
          accent: '#38c172', // Un color verde de acento
          'custom-gray': '#e0e0e0', // Un gris personalizado
        },
        fontFamily: {
          sans: ['Roboto', 'sans-serif'], // Fuente sans-serif personalizada
          serif: ['Merriweather', 'serif'], // Fuente serif personalizada
        },
        spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
        },
        boxShadow: {
          'custom': '0 5px 15px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: [],
  };
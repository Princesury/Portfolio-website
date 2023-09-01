/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      inter:['inter','sans','noto'],
       signature: ['Great Vibes', 'cursive'],
      },
      animation: {
        typing: 'typing 2s steps(6), blink 1s infinite',
    },
    backgroundImage: {
      'my-image': "url('./assets/prince1.jpg')"
    }
    },
    
  },
  plugins: [],
}


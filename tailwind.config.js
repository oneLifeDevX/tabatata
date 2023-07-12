/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./dappcomponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        primary: "#9569EC",
        secondary: "#DF11FF",
        bordure: "#FFFFFF",
        primaryBg: "#0B0A1D",
        
      },
      backgroundImage: {
        'my_bg_image' : "url('../public/background.jpg')",
        'bg2' : "url('../public/bg-v2.jpg')",
        'bg-bottom' : "url('../public/bg-bottom.jpg')",
      },

      
    
      
    },
  },
  plugins: [],
};

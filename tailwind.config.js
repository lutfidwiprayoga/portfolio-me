/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary:'#0ea5e9',
        secondary:'#14b8a6',
        danger:'#ef4444',
        warning:'#eab308',
        light:'#f8fafc',
        dark:'#020617',
      },
    },
  },
  plugins: [],
}


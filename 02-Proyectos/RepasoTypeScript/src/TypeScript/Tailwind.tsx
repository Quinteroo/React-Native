


//! TAILWIND
// es un framework de CSS
// Tailwind nos permite estilar directamente desde nuestro html
// se usa para web
// Native Wind habilita tailwind para React Native

// instalamos en la terminal
//* npm install -D tailwindcss postcss autoprefixer
//* npx tailwindcss init -p

// tras instalarlo se genera el archivo //* tailwind.confin
// pegamos


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //! esto ettá indicando que aplique tailwind a cualquier elemento de la carpeta src que sea tipo js, ts...
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// buscamos el index.css
// borramos todos los estilos definidos
// pegamos los estilos de tailwind
//* @tailwind base;
//* @tailwind components;
//* @tailwind utilities;


// una vez instalado tenemos que cerrar el proyecto y volver a levantarlo 
// para que los estilos se apliquen
//* npm run dev





//! MOVIE APP
// En esta sección vamos a trabajar realizando peticiones HTTP, manejando el
// caché de las mismas y varios tipos de listas. Puntualmente veremos:

// TanStack Query
// Axios
// FlatList
// Paquetes externos
// Reutilización de componentes y parametrización de props
// SafeArea manual
// Consideraciones de contenido
// Scroll dentro de otros Scrollable Elements
// Mapeo y tipado



//! INCIO DE PROYECTO
// abre terminal y crea proyecto //* npm create expo@latest
// nombre del doc //* MovieApp
// crea el proyecto, como nosotros estamos creando el proyecto dentro de una subcarpeta general,
// tenemos que eliminar la carpeta git que se creo por defecto, cambiar el nombre a //* 06-Movie-app
// y hacer el git add . desde la carpeta madre /REACT NATIVE


// seguimos el proceso de instalación de NativeWind //? https://www.nativewind.dev/getting-started/react-native

// limpiamos el proyecto con lo que no necesitamos
// /componentes /tabs /hooks etc

// iniciamos el proyecto y hacemos algún cambio para verificar que estemos conectados



//! VARIABLES DE ENTORNO Y API key
// creamos el documento en el root de nuestra app //* .env
// incluimos .env en //* .gitignore
// escribimos en .env //* EXPO_PUBLIC_MOVIE_DB_URL y EXPO_PUBLIC_MOVIE_DB_KEY=
// creamo sel documento //* .env.template con EXPO_PUBLIC_MOVIE_DB_URL= y EXPO_PUBLIC_MOVIE_DB_KEY= //comentario con url de donde la hemos obtenido
// este documento, sirve por si subimos nuestro proyecto a github que la gente sepa de donde a hemos obtenido por si quiere trbaajar con uestro proyecto


//? para desarrollar este peoyecto vamos a abrirnos una cuenta en The Movie DB para las peticiones fetch
// de esta manera hacemos el simulacro de llamadas al Backend
// al crearnos la cuenta, en nuestro perfil en "editar perfil" podemos ver la opcción //* API
// copiamos nuestra API y la copiamos en MOVIE_API_KEY

// la url la vamos a obtneer de //? developer.themoviedb.org
//? https://developer.themoviedb.org/reference/configuration-details

// aquí tenemos todas las llamadas al backend //* https://developer.themoviedb.org/reference
// hay que procurar tenerlo puesto en //* formato Node.js

// en el apartado //* MOVIE LIST > Now Playing es donde la obtenemos
// copiamos la url del //* ejemplo del fetch sin el /(slash final)
// lo incluimos en //* EXPO_PUBLIC_MOVIE_DB_URL=https://api.themoviedb.org/3/movie





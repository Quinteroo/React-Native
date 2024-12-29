

//! TIPOS DE NAVEGACIÓN Y ESTILOS

//? Temas puntuales
// Nativewind
// StackNavigation
// Enviar argumentos entre páginas
// Botones personalizados
// Estructura de directorios
// Temas y fuentes personalizadas
// Colores personalizados
// Múltiples layouts

//! Inicio de la aplicación
1 // terminal > iniciamos proyecto > //* npm create expo@latest
2 // nombre de la app > enter > cambiamos nombre del archivo
3 // la app que nos viene instalada pro defcto ya tiene mucha cosas instaladas como expo-router
4 // abrimos emulador de Android
5 // limpiamos proyecto eliminando > //* contenido /app, /components, /hooks, /constants, /scripts
6 // eliminamos de package.json el script //* reset
//? cualquier archivo que pongamos dentro de /app equivale a una pantalla de la aplicaicón
//? a excepción de algunos archivos con nombres especiales (ej: _layout) que tienen otras funciones predefinidas

//! ESTILOS CON NATIVEWIND
//? https://www.nativewind.dev/getting-started/expo-router
7 // procedemos a seguir la documentación para instalar NativeWind para ExpoRouter


//! FUENTES PERSOLAIZADAS
8 // descargamos desde google fonts
9 // de la carpeta "static" sacamos las fuentes que nos interesan y las dejamos caer enla carpeta //* /fonts del proyecto
10 // borramos la space mono que no vamos a usar
11 // modificamos el archivo de tailwind.config.js para que podamos usar las fuentes a traves de tailwind a la hora de estilar
theme: {
  extend: {
    fontFamily: { //* ponemos los nombres que queremos usar en tailwind
      "work-black": ["WorkSans-Black", "sans-serif"], //? taildwind le añade el "font-work-black"
        "work-light": ["WorkSans-Light", "sans-serif"], //! tiene que ser el nombre literal del archivo (sin el .ttf)
          "work-medium": ["WorkSans-Medium", "sans-serif"], // ponemos la funte en caso de no encontrala (sans-serif)
    }
  }
}

12 // ahora cargamos en RootLayout la fuente

import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync() //! podemos renderizar el SplashScreen mientras se cargan las fonts

//...dentro de la función RootLayout

const [fontsLoaded, error] = useFonts({
  "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"), //* el path (directorio) donde se encuentran las fuentes
  "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
  "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),

})

useEffect(() => {
  if (error) throw error; //* "no quiero continuar si sucede el error, lancemos el error"

  if (fontsLoaded) SplashScreen.hideAsync()

  if (!fontsLoaded && !error) return null //"si las funtes no están carfas y hay o no un error, no muestres nada"


}, [fontsLoaded, error])


13 // provamos nuestras fuentes en el Text de index (por ejemplo)
// para ver si funcionan.
// className=""font-work-black
14 // añadimos el compoennte en index <SafeAreaView> para dejar espacio en el top del móvil.

//! COLORES PRESONALIZADOS
15 // taildwind.confi
16 // theme :{ extend: {colors: { primaryv: "#"}
17 // className="text-primary"
18 // o podemos usa className="bg-primary"
19 // podemos mejorar la configuración añadiendo diferentes tonos
20 //  colors:{ secondary:{ DEFAULT: "#B40086", 100: "#C51297", 200:"..."}}
21 // className="text-secondary-100"


//! NAVEGACIÓN
22
23
24
25
26
27
28
29
30

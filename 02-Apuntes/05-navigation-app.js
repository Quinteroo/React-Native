

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
// theme: {
//   extend: {
//     fontFamily: { //* ponemos los nombres que queremos usar en tailwind
//       "work-black": ["WorkSans-Black", "sans-serif"], //? taildwind le añade el "font-work-black"
//         "work-light": ["WorkSans-Light", "sans-serif"], //! tiene que ser el nombre literal del archivo (sin el .ttf)
//           "work-medium": ["WorkSans-Medium", "sans-serif"], // ponemos la funte en caso de no encontrala (sans-serif)
//     }
//   }
// }

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
22 // la carpeta app es donde están todas las Screen
// para construir nuevas screen creamos carpetas independientes, eje:
//  /products/index.tsx
//  /profile/index.tsx
//  /home/index.tsx
//* aunque sean varios index, lo interesante es crearlas por carpeta, por si un día la app crece
//* y necesita subnavegación, poder escalarla
//* por ej:
//* /products/_layout.tsx index.tsx descriptions.tsx

// para que todas las pantallas (si nuestro diseño lo requiere) no se coman el top del móvil
// podemos meter el <Slot> dentro de un <SafeViewArea>

// es muy común que app redirija a alguna pantalla al iniciar la app (por ejemplo, si es un app en la que se ha ehcho login)
// que nos lleve al perfil del usuario )
// para ello empleamos el componente <Redirect href="/home" />
// el cual importamos de expo-router

// dentro de /home podemos importar un componente de expo-router que se llama <Link href=""/>
// el cual nos ayuda a navegar entre las pantallas

//?toda la relacioón de carpetas y archivos dentro de /app se nombran en minúsculas

//! CUSTOM BUTTON Y LINK AScHILD
// cuando queremos crear un botón personalizado creamos una carpeta fuera de app
// /app/shared/components/CustomButton.tsx

// el custombutton tiene como compoentne un Pressable, si queremos llevar las Props de los Pressable 
// a nuestro componente cuando lo importemos en una Screen tenemos en el interface que poner
//* interface Props extends PressableProps{ children: String, color: "primary" | "secondary" }

// la opacidad si queremos hacerlo de manera tradicional hay que hacer el destructuring de la propiedad
// pressed
// styles={({pressed})=>({})} //* dentro poner los ternarios

// como hemos expandido las props de pressable a CustomButton, podemos destructurar las propiedades
// onPress={onPress} y onLongPress={onLongPress} dentro de Pressable

//? para poder darle la propiedad de Link a CustomButton tenemos que importar de expo-router >> router

23 //* onPress={()=> router.push("/products")}

// si queremos utilizar el Link como componente padre de CustomButton tenemos que ponerle la propiedad
//* asChild

{/* <Link href="/products" asChild>
  <CustomButtom color="primary" >Productos</CustomButtom> 
</Link> */}



//! FOWARDREF
// para que funcione el el <Link> con el asChild nec esitamos pasar esa referencia Child
// y evitar así que nos de error

// se emplea parecido a //* memo()
// envolvemos toda la función cón 

const CustomButton = React.forwardRef("aquí el resto del código")
// tenemos que pasar por los argumentos del funtionalComponent ref

// ({children, color...}:Props, ref: React.Ref<View>)=>{

//   [...resto del código]
// }

//* tenemos que incluir el ref dentro del Pressable

//   < Pressable >
//      className
//      onPress
//      onLongPress
//      ref = { ref }
//   < Pressable >


//! STACJ NAVIGATION
//? genera en el header de la aplicaicón una flecha para volver a la pantalla anterior
// también es posible volver atrás arrastrando el dedo


24 // en _layout importa stack from expo-router y cambia slot por <Stack/>+
25
26
27
28
29
30

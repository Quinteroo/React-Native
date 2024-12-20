


//! CALCULADORA
// Esta es nuestra primera aplicación formal en React Native, aprenderemos muchas cosas que son parte del día a día, como:

//  - Personalización de componentes
//  - Temas y estilos básicos centralizados
//  - Herencia de props
//  - Instalación de paquetes como Haptics
//  - Layouts de ExpoRouter
//  - Custom Hooks
//  - Reutilización de componentes y su personalización
//  - Fuentes personalizadas
//  - Determinar el sistema operativo que corre la app, (IOS, Android)

// También realizaremos una calculadora que literalmente funciona y se siente cada vez que se presionan las teclas.


//! Inicio de proyecto
//? revisamos y leemos cada archivo y carpeta para relacionarnos con ellos
1 // buscamos en Expo Docs
2 // iniciamos el proyecto en la terminal pero con //* default que trae todo lo necesario para montar la app
3 // iniciamos proyecto en Android
4 //* la configuración por defecto nos permite abrir el emulador web
5 // la carpeta /app tiene algunos compoenntes por defecto como "not-found"
6 // Components/ __tests__ es la carpeta para hacer los testing
7 // para resetear todo el proyecto //* ejecutamos el script del archivo reset-project.js

//! ExpoRouter: index y _layout (limpiamos proyectos)
8 // (tabs)borramos la carpeta, y aparece una pantalla que dice que esa pantalla no existe
9 // borrar el html.tsx y el not_found //* aparece una página "unmatched"
10 // layout tiene mucha info como el useFonts de RootLayout
11 // _layout > borramos todo el código y hacemos snipped rnf tab
12 // cambiamos el nombre del compoennte a RootLayout
13 // creamos en app/index.tsx (no capitalizado)
14 // creamos componente defecto dentro de index CalculatorApp //* los componentes tiene que tener el export default 
15 // en RootLayout añadimos el componente de Expo  //* <Slot />
16 // <Slot/> le está diciendo a Expo y React Native //* "todo lo que esté por debajo"
17 // slot le está diciendo "cualquier ruta hija renderidazalo en Slot"
18 // por lo que RootLayout podemos poner por ejemplo un header / slot /footer
19 // eliminar carpeta /components en constants/ Colors.ts la dejamos vacía
20 // eliminar carpeta /hooks 
21 // en /package.json eliminamos el script "reset-project" 



//! Fuentes personalizadas y diseño inicial
22 // empezamo s atrabajar en index nuestra app
23 // cambiamos el tamaño del h1
24 // en _layout.tsx a RpptLayout añadimos con
const [] = useFonts({ //* useFont lo exportamos de "expo-font" 
  SpaceMono: requestAnimationFrame("../assets/fonts/SpaceMono-Regular.ttf") //* importamos la fuente que tenemos descargada
})
25 // ya tenemos la fuente importada a la app, pero para que se renderice, tenemos que hacerlo directamente sobre el componente
26 // nos vamos a CalculatorApp y en style añadimos el fontFamily :"SpaceMono" //* si no lo reconoce porque está mal escrito pone la fuente por defecto de cada sistema operativo
27 // al usefonts le ponemos [loaded] //* de esta manera indicamos que cuando se carge la fuentes, entonces podemos renderizar los componentes
if (!loaded) {
  return null
} //* podríamos hacer algún memsaje 

//? el layout solo contiene la configuración del fondo que deberia de aplicarse a todas las páginas
28 // /contants definimos los colore 04.20 para hacer el proyecto como el profe
29 // añadimos a colors as const; àra que se lean como colores y no que TS los aplique como strings
30 // añadimos de RootLayout el view style {backgroundColor:Colors.background}
31 // añadimos flex 1 para que se estire y ocupe toda la pantalla
32 // debajo de Slot ponemos el <StatusBar /> //* lo importamos de Expo no de RN
33 // style="light"
34



//! Estilos globales
34 // crea carpte en la raiz y un archivo ts para stlyes
35 // export ocnts globalStyles = StyleSheet.creat ({})
36 // crea style con el background y color que pusimos al view de RootLayout
37 // importamos en el view stle={globalStyles.background}
38 // organizamoz los imports de arriba abajo //* primero lo que venga de react-native luego expo y por ultimo mis imports personalizados
39 // creamos el estilo globlal calculatorContainer : {}
40 // coloca en el view de Calculator App GlobalStyles.calculatorContainer
41 // da estilos flex a la clase calculatorContainer
42 // creamos las clases mainResult y lo añadimos al text de Calculator App
// (estamos siguiendo el modelo del diseño para orientarnos con los estilos) 
43 // color, fontSize, textAling, fontWeight
44 // lo mismo con la clase subResult, para el sengundo Text de CalculatorApp


//! Custom Text y Default Props
// cuando un componente se repite en una aplicación y hay que personalizarlo aplicando muchas propertis del componente
// este puede llegar a volverse demasiado complejo y hacer demasiado grande el componente
// por lo que procedemos a //* extraer el componente
45 // creamos la carpeta /components y el archivo del componente por ej //* /CustomText.tsx
46 // en este componete, hacemo sel rich snniped rnfe y como es un texto, eliminamos el view
47 // al meter el compoennte en el CalculatorApp y escribir en el, TS se queja porque no tenemos definido los childrens del compoennte, así que los definimos
48 // interface Props { children: "string"}, en la función ({childre}:Props) y dentro del Text del componente {children}
49 // pero claro, no siempre tiene que ser un string lo que pasemos como children, puede ser también un número no?
50 // además, necesitamos poder usar desde CalculatoApp en CustomText las propiedades del texto pero //? como le decimos a TS que puede usarlo?
51 // interface Props extends TextProps {} (lo importamos junto con Text), de esta forma //* le decimos que puede emplear las mismas props que text si lo necesita
52 // para ello, en CustomText en Text hacemos un {...rest} //* spread operator, de esta forma las puede usar (también hay que pasarlo como props)
53 // para facilitar los estilos, también podemos pasar como property una //* variante para hacer un ternario

// interface Props extends TextProps{
//   variant: "h1" | "h2"
// }

// CustomText({children, variant, {...rest}})

// <Text style={[color: "white", fontFamily:"SpaceMono"],
//   variant === "h1" ? GlobalStyles.mainResult : GlobalStyles.subResult
// }

54 // lo pasamos variant como Props variant="h1"en CustomText
55 //* si haces Alt + Click sobre un componente te lleva a una pantalla con la def de este y sus porperties


//! BOTONES DE LA CALCULADORA
// siguiendo el modelo del diseño de la interfaz facilitado
56 // metemos los dos Text con lso resultados dentro de otro View (funcionan como divs)
// como vemos en el diseño, podríamos ir construyendo el diseño en bloque con filas de 4 botones en columna 
57 // creamos compoennte CalculatorButton, rnfe y Pressable
58 // importamos el CalculatorButton dentro del view
59 // como podemos ver podemos emplear el mismo compoennte pero dándole la capacidad de personalizarlo con colores, texto, y funciones
//? creamos estylos globales, aunque también podríamos hacerlo dentro de cada componente
60 // aplicamos TS al CalculatorButton, con el interface Props { label:string, color: string, blackText: false, onPress: => void}
61 // hacemos destructurin de las props, en el componente ({label, color, blackText=false, onPress}:Props) (podemos indicar el por defecto (como el false))
62 // añadmios al compoennte las props por ejemplo onPress={onPress} o un ternario para el colo del texto style={{color: blackText ? "black" : "white"}}
63 // en CalculatorApp pasamos las props de cada botón 
64 // renderizamos de nuevo la app

//! BOTONES CALCULADORA parte 2
65 //01.40 hacemos destructuring en styles=({pressed}=>({ metemos los estilos y opacity: pressed ? 0.8 : 1}))
66 // construimos el resto de las filas
67 // para el útimo botón, el de 0, le podemos poner la prop doubleSized
68 // la pasamos por la interface como doubleSized?:boolean y al hacer destructuring la ponemos por defecto como false
69 // dentro del {pressed} de Pressable hacemos el ternatio width: doubleSized ? 180 : 80,


//! PAQUETES ADICIONALES HAPTICS Y NAVIGATIONBAR
70 // NavigationBar lo empleamos para quitar una barra blanca que aparece en la parte baja de la app en dispositivos Android
// pero esto no es necesario hacerlo en iOS
//? https://docs.expo.dev/versions/latest/sdk/navigation-bar/
71 // instalamos el paquete con //* npx expo install expo-navigation-bar
72 // importamos en _layout la api / componente  //* import * as NavigationBar from 'expo-navigation-bar';
73 // creamos la función que distingue el tipo de dispositivo en el que nos encontramos, lo hacemos importanto //* Platform de react-native
const isAndroid = Platform.OS === "android"

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black"); // o el color que sea
}

74 // este cambio no se aprecia en el emulador de Android en el PC pero una vez lo ponemos en el móvil desaparece la barra blanca 
//* reload app

75 // para el hapstic seguimos el mismo procedimiento
//? https://docs.expo.dev/versions/latest/sdk/haptics/
76 // en el componente que queremos aplicar el efecto de vibración para percibir el feedback de que hemos hecho click //* import * as Haptics from 'expo-haptics';
77 // aplicamos dentro del componente
// onPress={()=>
// Haptics.selectionAsync();
// onPress();
//}
//* reload app

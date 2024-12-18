


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
45 
46
47
48
49
50
51
52
53
54
55




32 // debajo de Slot ponemos el <StatusBar /> //* lo importamos de Expo no de RN
33 // style="light"
34



//! Counter App
// En esta sección empezaremos a dar nuestros primeros pasos en React Native con Expo, 
// aprendiendo varios componentes comunes como:

TouchableOpacity
Pressable
StatusBar
Views
StyleSheet
Text

//! crear proyecto
0 // navegamos a la carpeta de proyecto desde la terminal
1 // npx create-expo-app@latest //* --template blank-typescript counter-app
2 // cambiamos el nombre a //* 03-counter-app
3 // en la terminal //* npm run start
4 // press a (emulador de Android)
5 // cambiar el H1 para verificar que estamos conectados


//! estilos y botonos
6 // 00.42 text
7 // View funciona como un div
8 // StatusBar sería tanto la parte alta del móvil con el reloj etc
9 // desde style="auto", podemos cambiar el auto y modificar el color
10 // también podemos modificar el backgraound directamente desde el StyleSheet
11 // StyleSheet es la manera de tener un código dentro de ReactNative que luce como CSS
12 // es como escribir CSS pero quitando los "-" -> background-color => backgroundColor (CamelCase)

13 // crea el useState count importando useState de react
14 // sustituye el text por {count}
15 // en el styleSheet crea otra "clase" llamada textHuge (por ej), y la añade al componente text con style={stules.textHuge}
16 // le da estilos a la clase textHuge fontSize y fontWeight

17 // en vez de usar button empleamos //* pressable con text dentro y escribimos +1 para hacer crear el botón
18 // otra opción de botón es //* TouchableOpacity
19 // la diferencia es que Touchable hace un fade al hacer click, pero el Pressable da más flexibilidad para diseñar
20 // para eventos, en vez de onClick empleamos //* onPress funciona igual el setCount

21 // 07.00 >> le da estilos al botón floatingButton, //* position, bottom, right, bckC, pad, borderRadius, shadow, elevation
22 // damos estilos en línea al text del botón
23 // si se deja presionado mucho tiempo el botón usamos el evento //* onLongPress ={()=>setCount(0)}

//! botón flotante personalizado, componente reutilizable
24 // creamos carpeta components y el archivo FAB.tsx (Floating Action Button)
25 // empreamos el snipped //* rnf y nos crea el componente de react native
26 // importamos el componente FAB al App y los estilos empreados al componente FAB
27 // importamos también los componente de react, styleSheet etc //* y también lso eventos y lógica

28 // pasamo las props, métodos etc y //* aplicamos typeScript
29 // creamos la propiedad position, que es opcional (TS) para que la pasaemos donde queramos que esté el botón
29.01 // en el interface Props definimos position? : "left" | "right"
30 // creamos la clase en el styleSheet positionRight:{ right :20,},
31 // le pasamos la props desde App de position="left"
32 //? ejercicio: de crear el estilo positionLeft y crear el ternario para saber que aplicar en función de la props que pasaemos


//! retroalimentación al tocar el botón
33 // en pressable, haciendo una función flecha anónima podemos hacer destructuring de una propiedad del botón Pressable
// pressed, que nos permite modificar el aspecto del botón cuando este está presionado

// style={({pressed})=>
//   [
//     styles.floatingButton, 
//     position === "right" ? styles.positionRight : styles.positionLeft,
//     pressed ? {opacity:0.7} : {opacity:1}
//   ]}

34 //? 03.00 ejercicio, reutilizar el componente, que esté en el lado izquierdo y que resete el valor a 0


35
36
37
38
39






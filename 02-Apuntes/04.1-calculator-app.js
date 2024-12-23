

//! LÓGICA CALCULADORA
// tenemos que empezar a contruir la lógica de la calculadora
// como va a ser muy grande no la construimos directamente en el archivo index.tsx
// si no que la hacemos en un archivo a parte
1 // creamos la carpeta //* /hooks/useCalculator.tsx
2 // export const useCalculator = () =>{}
3 // comenzamos a crear los estados useState (las "variables") que vamos a necesitar en la lógica
// los números, la fórmula, el resultado, los operadores...
4 // para los operadores importamos useRef de react //* ya que el usuario puede cambiar de decisión de cual es el operador
5 // y creamo el enum Operator { add:"+", substrack:"-", ...}
6 // dentro de la función useCalculator > const lastOperation = useRef<Operator>()
7 // creamos los estados formula, number, prevNumber
8 // const buildNumber =(numberString:string)=>{ //* tenemos que indicar que el número que recibe es String para que funcione la lógica
// console.log({numberString})


// return {
// forumula,
// number, 
// prevNumber,
// buildNumber
// }
//  }
9 // hacemos destruturing de useCalculator en index.
10 // cambiamos el result por {formula} y los console.log por buildNumber y probamos
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30

//import React from 'react'



export const BasicTypes = () => {
  const name:string = "fernando"; //! indicamos el tipo de valor
  const age:number = 38;
  const isActive:boolean = true;


  // tipar está bien cuando TypeScript no sabe lo que le puedes pasar
  //ej : const powers = [] <- esto puede ser un array de objetos, strings, números...
  // powers sería de tipo "any" que es lo que usamos en JS

  const powers:string[] = ["React", "ReactNative"] //! si intentas agregar un número,un booleano, [], {} TS se va a quejar

  return (
    <>
    <h3>Tipos Básicos</h3>
    {name} - {age} - {isActive ? "Activo" : "No activo"}

    <p>{powers.join(", ")}</p>
    </>
  )
}

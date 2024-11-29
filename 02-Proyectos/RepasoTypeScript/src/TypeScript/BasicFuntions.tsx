


const addTwoNumbers = (a:number, b:number): number =>{ //! (a:number, b:number): number <- podemos indicar hasta el tipo de valor que esperamos recibir
  return a +b
}

//? *



export const BasicFuntions = () => {

  // const addTwoNumbers = (a:number, b:number): number =>{
  //   return a +b
  // }
  //? si tenemos un Functional Component con una funcion que no depende de ningún useState, es mejor sacarlo fuera
  //? debido a que React revisa cada vez que se vuelva a re-renderizar y se vuelve a crear una asignaciónen memoria
  //? por lo que la sacamos fuera


  return (
    <>
    <h3>Funciones Básicas</h3>
    <p>el resultado es: {addTwoNumbers(2,3)}</p>
    </>
  )
}

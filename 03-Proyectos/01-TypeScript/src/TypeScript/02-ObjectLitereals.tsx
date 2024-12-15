// import React from 'react'

//? una interfaz son las reglas que le ponemos a nuestro código
// al transpilar de TS a JS se transforma en 0 líneas de código, es algo propiop de TS

interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address; //! evitamos el anidamiento
}

interface Address {
  country: string;
  houseNo: number
  street?: string; //! con "?" indicamos que es opcional
}



export const ObjectLitereals = () => {

  // si posamos el mouse sobre "person" nos aparece un modal con el typo de cada dato
  const person:Person= {
    age: 34,
    firstName: "Miguel",
    lastName: "Quintero",
    address:{
      country: "Spain",
      houseNo: 5
    }
  }

  return (
    <>
    <h3>Objetos Literales</h3>
    {JSON.stringify(person, null, 2)}

    </>
  )
}

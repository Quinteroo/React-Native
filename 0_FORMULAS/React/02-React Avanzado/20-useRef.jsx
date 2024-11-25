//* EVITAR RE-RENDERIZADOS

import React, { useState, useRef } from 'react'

const CodeUseref = () => {

  const textInput = useRef(null)
  const [name, setName] = useState("Miguel")

  const printValue = () => {
    const inputValue = textInput.current?.value; //! Open Chaining para no usarlo en caso de que no exista valor

    if (inputValue) setName(inputValue)
    console.log("imprime nombre input:", inputValue);

  }


  return (
    <div>
      <h3>Hola soy {name}</h3>
      <input type="text" placeholder='name' ref={textInput} />  //! ref es para capturar el input.value
      <button onClick={printValue}>Mostrar</button>  //! en vez de hacerlo con un evento onChange que esté constantemente escuchando cambios en el input y rerenderizando
    </div>
  )
}

export default CodeUseref



//* de esta manera somos nosotros los que controlamos el render,
//* es decir, le decimos a React, ya no es como en otros casos usando  el onchange,
//* Ahora guardamos el valor en una referencia, no quiero que estés constantemente escuhando,
//* Y cuando se clique el botón ya seré yo el que me encargue de verificar el el valor almacenado y
//* de cambiarlo en mi estado.

//* DE esta manera controlamos los renderizados

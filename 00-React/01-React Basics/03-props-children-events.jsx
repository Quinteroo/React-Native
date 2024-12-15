//! ejemplo props
//* -----------------------------------------------------------------------------

const Button = (props) => {
  console.log(props);

  return <button>Texto del Botón</button>
}

//también podemos hacer object destructuring, 
const Button1 = ({ text, función }) => { //si pasas una función no se puede poner "function" en el destructuring
  console.log(props);

  return <button onClick={función}>{text}</button>
}

//* -----------------------------------------------------------------------------
// podemos pasar cualquier tipo de atributo text, funcition etc
// por ejemeplo se pueden pasar funciones para darle a los botones diferentes acciones

import "./App.css"
import Button from "./components/Button/Button"


function app() {
  return (
    <>
      <div>
        <h1>
          <Button
            text="saludar"
            function={() => alert("holaaaa")}

          />
        </h1>
      </div>

    </>
  )
}

export default app


//* -----------------------------------------------------------------------------
// en este caso nos devuelve un objeto con los parámetros por consola

{ text: "saludar" }

//! listado de eventos más utilizados
onClick
onsubmit
oninput
onFocus
onBlur
onChange

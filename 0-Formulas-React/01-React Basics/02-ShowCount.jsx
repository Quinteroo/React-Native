//? EJEMPLO COMPONENTE
import React from "react";
import "./ShowCount.css"

export function ShowCount() {

  const [count, setCount] = React.useState(0)


  return (
    <div>
      <p>you clicked here <strong>{count}</strong> time</p>
      <button onClick={() => setCount((count) => count - 1)}>
        RESTAR
      </button>
      <button onClick={() => setCount((count) => count + 1)}>
        SUMAR
      </button>
    </div>

  )
}

//? ESTADOS
const [nombre, setnombre] = useState(valor - inicial)
// nombre = nombre variable
// setNombre = función seteadora permite mutar valor del estado
// useState = el hook importado
// valor-inicial = el que queramos


//? EJEMPLO EXPORTAR VARIABLES
import React, { useContext } from 'react';
import { MiContexto } from './Contexto';

function Componente1() {
  const { variable, setVariable } = useContext(MiContexto);

  return (
    <div>
      <p>Componente 1: {variable}</p>
      <button onClick={() => setVariable(variable + 1)}>Incrementar</button>
    </div>
  );
}

export default Componente1;
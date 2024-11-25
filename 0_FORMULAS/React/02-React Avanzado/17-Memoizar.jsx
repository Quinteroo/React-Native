//* MEMORIZAR COMPONENTES


import React, { useState } from 'react'

//! el abuso de uso de memos, puede que haya un abuso de comprobaciones para no re-renderizar y relentizamos nuestra app

const componenteDos = React.memo(({ title, poster }) => { //! tenemos que envolver TODO el componente para que no se renderice otroa vez

  console.log("renderizando Movies");


  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} />
    </div>
  )
})

export default Movies



//? ====================================================================================================



const App = () => {
  const [state, setState] = useState(0) //! el estado pertenece al componente que lo contiene (App), no a los hijos


  return (
    <>
      <componenteUno state={state} setState={setState} />
      <componenteDos /> //!al modificar state, se re-renderiza todo el componente, para evitarlo añadimos memo a compoennteDos
    </>
  )
}

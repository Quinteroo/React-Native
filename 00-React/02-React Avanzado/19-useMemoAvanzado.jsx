import React from 'react'

//! USEMEMO SOLO USAR CON CÁLCULOS MUY COMPLEJOS

const CodePost = ({ posts }) => {    //! posts simula un array de objetos que representan artículos de blog con título y fecha creación

  const [rerender, setRerender] = React.useState(false)


  const orderPostWithTitle = React.useMemo(() => {

    // cálculo complejo aquí...

  }, [posts]) //! le añadimos un array de dependecias



  return (
    <div>
      <button onClick={() => setRerender(!rerender)} >ReRender</button>
    </div>
  )
}

export default CodePost
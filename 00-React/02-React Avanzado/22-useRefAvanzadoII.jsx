import React, { useRef } from 'react'



const CodeUseRefCss = () => {

  const ColorRef = useRef(null)

  const ChangeColor = () => {  //! en este caso lo utilizamos para modificar directamente el CSS
    ColorRef.current.className === "box" ?
      ColorRef.current.className = "box-modify" :
      ColorRef.current.className = "box"
  }

  return (
    <>
      <div className='box' ref={ColorRef}>I'm in a box</div>
      <button onClick={ChangeColor}> Modify Color </button>
    </>

  )
}

export default CodeUseRefCss


//* lo importante del useRef es que me está provcando un cambio sin tener que generar un nuevo render
//* es decir, me guardo la referencia y trabajo sobre ella
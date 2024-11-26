import React, { useState, useEffect, useRef } from 'react'

const CodeRefFocus = () => {

  const FocusInputRef = useRef(null) //! almacenamos el valor del input

  useEffect(() => {   //! usamos useEffect porque queremos que esto suceda solo 1 vez mientras el componente se monta
    if (FocusInputRef.current) {
      FocusInputRef.current.focus()  //! marcamos focus por defecto el input que hemos extraido en la variable con useRef
    }

  }, [])


  return (
    <div>
      <form >
        <fieldset>
          <label htmlFor="user">
            <input type="text" name="user" id="user" ref={FocusInputRef} placeholder='User' /> //! marcamos el input a utilizar
          </label>
          <label htmlFor="pass">
            <input type="password" name="pass" id="pass" placeholder='Password' />
          </label>
        </fieldset>
      </form>

    </div>
  )
}

export default CodeRefFocus
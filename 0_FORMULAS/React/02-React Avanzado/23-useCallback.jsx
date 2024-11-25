import React, { useCallback, useState } from 'react'


const Counter = () => {

  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const memoizedCountOne = useCallback(() => setCountOne(countOne), [countOne])
  const memoizedCountTwo = useCallback(() => setCountTwo(countTwo), [countTwo])

  //! memorizando la función de esta forma, evitamos que cuando el usuario 
  //! haga click en un botón, se rerenderice de nuevo todas las funciones,
  //! ya que estas tienen array de dependencias
  //* es decir, [props] es el array de dependencia , es decir que por más que se rerenderice el componete no se creara una nueva función


  return (
    <>
      <div>
        <h3>{countOne} || {countTwo}</h3>
        <Button HandleClick={memoizedCountOne} name="button+1" />
        <Button HandleClick={memoizedCountTwo} name="button+2" />
      </div>

    </>

  )


}

export default Counter
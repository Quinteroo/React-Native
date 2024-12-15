import { useState } from 'react'

export const useCounter = () => {

  const [count, setCount] = useState(10)


  const IncreaseBy = (value:number) =>{
    setCount(Math.max(count + value, 0)) //* con esto evitamos que baje de 0.
  }


  return {  //! es más conveniente devolver un objeto porque es más fácil de expandir en un futuro y añadir elementos
    // properties
    count,

    // actions
    IncreaseBy

  }
}

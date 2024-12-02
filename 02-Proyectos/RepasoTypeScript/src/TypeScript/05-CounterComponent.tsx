// import { useState } from 'react'

import { useCounter } from "./hooks/06-useCounter"

export const CounterComponent = () => {
  
  //pasamos el código a un customHook para que se vea más limpio
  // const [count, setCount] = useState<number>(10) //! podemos también especificar el tipo de dato del useState

  // const IncreaseBy = (value:number) =>{
  //   setCount(count + value)
  //   setCount(Math.max(count + value, 0)) //* con esto evitamos que baje de 0.
  // }

  const {count, IncreaseBy}= useCounter()

  
  return (
    <>
    <h3 className='font-bold'>Contador <small>{count}</small></h3>

    <div>
    <button 
      className='p-2 bg-blue-500 rounded-2xl m-2 text-white hover:bg-blue-950'  
      onClick={()=>IncreaseBy(+1)}>
      +1
    </button>
    <button 
      className='p-2 bg-blue-500 rounded-2xl m-2 text-white hover:bg-blue-950'  
      onClick={()=>IncreaseBy(-1)}>
      -1
    </button>

    </div>

    
    </>
  )
}

import React from "react"

//* src\Providers\AppContext.jsx
// creamos el proveedor de datos


export const AppContext = React.createContext()     // esta es la tienda / escaparate


// este es el proveedor de los datos, es decir, la ubicaicó nde donde puede extraer lso componentes lo que necesiten
const AppProvider = ({ children }) => { //! children era todos los hijos que yo metiera dentro dep AppProvider

  const [mode, setMode] = useState("light")

  return (
    <AppContext.Provider value={{       //! empleamos el AppContext que acabamos de crea para pasar los datos que queramos
      nombre: "periquito de los palot",
      mode: mode,
      setMode: setMode

    }}>
      {children}     //! proveemos de este dato a todos nuestros hijos, y ya lo coge el que lo necesite
    </AppContext.Provider>
  )


}

export default AppProvider


//? ============================================================================

//* src\main.js
// envolvemos con el proveedor el componente que queremos que tenga acceso, en este caso es App.jsx pues queremos que sea
// toda la aplicaicón

import AppProvider from "./provider/ThemeProvider.jsx" //! sin corchetes


createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />          //! <App /> es la prop children de AppProvider
  </AppProvider>
)



//? ============================================================================


//* src\components\componenteHijo\componenteHijo.jsx
// extraemos el dato en el compoenente que lo necesite



import React from 'react'

const componenteHijo = () => {
  const { nombre } = useContext(AppContext)

  return (
    <div>{nombre}</div>
  )
}

//export default componenteHijo
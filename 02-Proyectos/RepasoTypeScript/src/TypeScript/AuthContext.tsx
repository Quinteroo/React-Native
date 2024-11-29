

//* /src/Providers(o Context/AuthContext.tsx


import {createContext, PropsWithChildren, useContext} from "react"

// sería interesante indicar también como luce neustro state
interface AuthState {
  hola: string
}

export const AuthContext = createContext({} as AuthState)


// vamos a exponer un CustomHooks que regrese ese contexto
export const useAuthContext = () => useContext(AuthContext) //! en vez de hacer destrucuring en el componente usando useContext, exportamos un customHooks que lo haga ya


// creamos el functional componente , este caso el Proveedor. para poder usarlo en el resto de la app

export const AuthProvider = ({children}:PropsWithChildren)=> {


  return (
    <AuthContext.Provider value={{
      hola: "Mundo!"
    }}>
    {children} // t odo loq ue envuelva con el provider puese usar la infor que le pasemos

    </AuthContext.Provider>
  )

}




//? ============================================================================

//* src\main.js
// envolvemos con el proveedor el componente que queremos que tenga acceso, en este caso es App.jsx pues queremos que sea
// toda la aplicaicón

//import AuthProvider from "./provider/AuthProvider.jsx" //! sin corchetes


// createRoot(document.getElementById('root')).render(
//   <AuthProvider>
//     <App />          //! <App /> es la prop children de AuthProvider
//   </AuthProvider>
// )

//? ============================================================================


//* ahora podríamos usarlo en cualquier compoennte dentro de App
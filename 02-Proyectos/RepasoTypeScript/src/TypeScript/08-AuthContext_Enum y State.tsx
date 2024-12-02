import { useState, createContext, PropsWithChildren, useEffect } from "react";


enum AuthStatus {
  "checking",
  "authenticated",
  "unauthenticated" // empleamos comas en vez de |
}

interface AuthState { // cuando hablamos de Autenticación es normal tener el valor status
  // status: "checking" | "authenticated" | "unauthenticated"
  status: AuthStatus;
  token?: string;

  user?:User;
  isChecking: boolean;
}

interface User{ // poemos poner este interface más arriba
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState)



export const AuthProvider = ({children}:PropsWithChildren)=>{

  const [status, setStatus] = useState(AuthStatus.checking)

  // vamos a simular en este ejemplo una petición fetch con un useEffect
  useEffect(()=>{
    
    setTimeout(()=>{
      setStatus(AuthStatus.unauthenticated) // en este ejemplo ponemos como si no se hubiese autenticadp
    }, 1500)

  },[])

  return (
    <AuthContext.Provider 
    value={{
      status: AuthStatus.checking, // me aparece las 3 opciones del interface
      // status: status <- poderíamos poner el status del useState  
      
      //Getter
      isChecking: status=== AuthStatus.checking
    }}>
    {children} 
    
    </AuthContext.Provider>
  )

}
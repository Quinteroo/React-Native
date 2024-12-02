import { useState, createContext, PropsWithChildren, useEffect } from "react";


enum AuthStatus {
  "checking",
  "authenticated",
  "unauthenticated"
}

interface AuthState { 
  status: AuthStatus;
  token?: string;

  user?:User;
  isChecking: boolean;
  isAuthenticated: boolean;

  // method         //! estructura : si no entregamos nada, regresa nada, ponemos "void"(no regresa nada)
  loginWithEmailPassword: (name:string, email:string) => void;
  logout:() => void; // en este caso como no necesita values se deja vacío

}

interface User{ 
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState)



export const AuthProvider = ({children}:PropsWithChildren)=>{

  const [status, setStatus] = useState(AuthStatus.checking)
 
  // <User> es la interfaz con la que tipamos este estado
  const [user, setUser] = useState<User>()


  //esto es un ejemplo de como usar setUser
  const loginWithEmailPassword = (name:string, email: string)=>{
    console.log(name, email);
    
    setUser({ // tenemos la interfaz definida de como tiene que ser este objeto
      name:"miguel anegel",
      email: "miguelangel@google.com",
    })
    setStatus(AuthStatus.authenticated) // una vez se compruebe el nombre y el email ya estaríamos autenticados
  }

  const logout = () =>{
    setUser(undefined)
    setStatus(AuthStatus.unauthenticated)
  }

  useEffect(()=>{
    
    setTimeout(()=>{
      setStatus(AuthStatus.unauthenticated) 
    }, 1500)

  },[])

  return (
    <AuthContext.Provider 
    value={{
      user: user,// pasamos el user como también como valor
      status: AuthStatus.checking, 

      //! getter
      isChecking: status=== AuthStatus.checking,
      // isAuthenticated podemos hacer destructuring en el componente que lo necesitemos
      isAuthenticated : status === AuthStatus.authenticated,

      //!method
      loginWithEmailPassword, //para que no se queje TS debemos definir tb el método en la interfaz
      logout,

    }}>
    {children} 
    
    </AuthContext.Provider>
  )

}
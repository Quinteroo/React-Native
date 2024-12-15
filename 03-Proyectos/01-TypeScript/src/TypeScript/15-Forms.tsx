// import React from 'react'

//? https://react-hook-form.com/
//* npm install react-hook-form


import {useForm} from "react-hook-form"

type FormInputs = { // las interface son iguales que los type, pero las interfaces permiten ser expandidas 
  email: string,
  password:string
}

export const Forms = () => {

  // useForm es propio de ReactHookForm
  const { register, handleSubmit} = useForm<FormInputs>({// de esta forma useForm sabe con que elementos vamos a trabajar
    defaultValues: {
      email:"miguel@google.com",
      password: "123456"
        //! register nos permite agarrar el valor de los inputs y enlazarlo con los campos con valores por defecto
        //! handleSubmit me va a permitir llamar al onSubmit solo si las validaciones son correctas
    }
  }) 

  const formSubmit = (myForm: FormInputs)=>{ // en el evento onSubmit indico que estoy recibiendo un formulario con la estructura de FormInputs
    console.log(myForm);
    
  }


  return (
    <>

    <form onSubmit={handleSubmit(formSubmit)}>
      <h3>Formularios</h3>

      <div className = "flex flex-col space-y-2 w-[500px]">
        <input type="email" 
          placeholder="email"
          className="border border-gray-300 p-2 rounded-xl"
          {...register("email", {required: true})}
        />

        <input type="password" 
          placeholder="password"
          className="border border-gray-300 p-2 rounded-xl"
          {...register("password", {required: true})}
        />
        <button type="submit" className="bg-blue-600 text-white rounded-xl p-2">
          Ingresar
        </button>
      </div>

    </form>
    
    
    </>
  )
}

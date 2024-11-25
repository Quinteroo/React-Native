import React from "react"
import { useForm } from "react-hook-form"

const Form = () => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: ""
    }
  })


  const submit = (formData) => {
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="username">
          Nombre Usuario*
        </label>
        <input type="text" id="username"
          {...register(userName,
            {
              required: {
                value: true,
                message: "necesitas poner un nombre ❌"
              }
            })}
        />
        {formState.errors.userName ? (
          <p>{formState.errors.userName.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">
          email*
        </label>
        <input type="text" id="email"
          {...register("email",
            {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                  "El email no es válido, revisa la ortografía ❌",
              },
            })}
        />
        {formState.errors.password ? (
          <p>{formState.errors.email.message}</p>
        ) : null}

      </div>
      <div>
        <label htmlFor="password">
          contraseña*
        </label>
        <input type="text" id="password"
          {...register("password",
            {
              required: true,
              pattern: {
                value: /^[0-9]{8}[A-Za-z]$/,
                message:
                  "La contraseña debe incluir números, letras Mayúsculas y minúsculas y como máximos 8 caracteres ❌",
              },
            })}
        />
        {formState.errors.password ? (
          <p>{formState.errors.userName.message}</p>
        ) : null}
      </div>
      <button>Enviar</button>
    </form>
  )
}


export default Form

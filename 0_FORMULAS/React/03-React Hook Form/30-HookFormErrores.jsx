import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ //! sintaxis para obtener el formState y su objeto errores
    //! aunque no me deje hacer submit, el objeto errors si se pinta en consola, lo que nos quiere decir que podemos extraer
    //! la info d este

    defaultValues: {
      userName: "",
      age: 0,
      password: "",

    }
  });


  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>

        //? ======== UNA FORMA DE HACERLO ===========================
        <label htmlFor="userName" >Nombre de usuario</label>
        <input
          type="text" {...register("userName"),
          {
            required: {
              value: true,
              message: "necesitas poner un nombre 😒"
            }
          }}
          id="username" />

          // si formState.errors.userName existe quiere decir que hay un error, por lo tanto puedo pintarlo
        {formState.errors.userName ? (
          <p>{formState.errors.userName.message}</p>
        ) : null}


      </div>
      <div>
        <label>Edad</label>
        <input type="number" {...register("age")} />
      </div>
      <div>
        //? =========== OTRA FORMA DE HACERLO =========================
        <label>Contraseña</label>
        <input type="password" {...register("password",
          //! escuchar diferentes tipos de posibles errores metiendo un objeto 
          //! de validaciones justo a continuación del nombre del campo en el registro del mismo.
          {
            required: true,
            pattern: {
              value: /^[0-9]{8}[A-Za-z]$/,
              message:
                "La contraseña debe incluir números, letras Mayúsculas y minúsculas y como máximos 8 caracteres",
            },
          })}
          style={{ borderColor: errors.password && "red" }}>
          {errors.password.type === "pattern" && <p style={{ color: "red" }}>{errors.password.message}</p>}
        </input>
      </div>
      <button>Registrar</button>
    </form>
  );
};

export default App;
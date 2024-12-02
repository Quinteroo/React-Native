import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {

  const { register, handleSubmit } = useForm({
    defaultValues: {  //! esto va a representar lso valores del formulario (clave -valor)
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
        <label htmlFor="userName" >Nombre de usuario</label> //! htmlFor señala al elemento con dicho ID
        <input
          type="text"
          {...register("userName")} //! a register le pasamos el nombre del input con el que lo relacionamos
          id="username"
        />
      </div>
      <div>
        <label>Edad</label>
        <input type="number" {...register("age")} />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" {...register("password")} />
      </div>
      <button>Registrar</button>
    </form>
  );
};

export default App;
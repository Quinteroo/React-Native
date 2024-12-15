import { ComponenteExtraido } from "./11-ComponenteExtraido"
import { useUser } from "./12-fetchAxios"
import { User } from "./13-ReqRes.response"

export const Componetization = () => {

  const {users} = useUser() // imaginamos que obtenemos to

  return (
    <>
    <table>  
      <thead className="w-[500] text-white bg-black rounded-xl">
        <tr>
          <th>Avatar</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user: User) =>(   //! para que TS no se queje de la prop, tenemos que definir la interface en el componente extraído
            <ComponenteExtraido key={user.id} user ={user} /> 

        ))}

      </tbody>
    </table>
    </>
  )
}
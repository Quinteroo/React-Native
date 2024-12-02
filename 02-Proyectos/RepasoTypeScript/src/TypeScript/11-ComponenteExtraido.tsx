// import React from 'react'

import { User } from "./13-ReqRes.response"


interface Props {
  user: User  //* este User viene de 13-ReqRes.response, donde habíamos definido la interface de los datos JSON obtenido de la llamda
}

export const ComponenteExtraido = ({user}:Props) => {
  return (
    <>
     <tr className="p-2">
        <td>
            <img src="" className="rounded-full w-14"/>
        </td>
        <td>
            {user.first_name} {"quintero"}
        </td>
        <td>
            {"miguel@google.com"}
        </td>
      </tr>
    </>
  )
}

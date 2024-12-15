// import React from 'react'

import { ComponenteExtraido } from "./11-ComponenteExtraido"

export const Componetization = () => {
  return (
    <>
    {/* en taildwind podemos poner un with específico metiendo entre [] */}
    <table>  
      <thead className="w-[500] text-white bg-black rounded-xl">
        <tr>
          <th>Avatar</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {/* Esto es el componente extrraído */}
        {/* <tr className="p-2">
          <td>
            <img src="" className="rounded-full w-14"/>
          </td>
          <td>
            {"Miguel"} {"quintero"}
          </td>
          <td>
            {"miguel@google.com"}
          </td>
        </tr> */}
        {/* así hacemos el componente más ligero */}
        <ComponenteExtraido /> 
        <ComponenteExtraido />
        <ComponenteExtraido />
      </tbody>
    </table>
    </>
  )
}

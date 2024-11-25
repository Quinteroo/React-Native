import { useEffect, useState } from "react"
import "./Character.css"

import { useParams } from "react-router-dom"
import Loading from "../../Loading/Loading"



const useParamsEnComponenteHijo = () => {

  const { id } = useParams()  //! con useParams (método propio de react-router-dom)
  //! somos capaces de recoger información enviada en to=" " del link del componente


  const [character, setCharacter] = useState(null) //? Dale a character un valor inicial para evitar el error al acceder a sus propiedades. Puede ser un objeto vacío {} o puedes agregar un manejo condicional al renderizado.


  useEffect(() => {
    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters/${id}`)
      .then((res) => res.json())
      .then((res) => setCharacter(res))
  }, [])



  if (!character) {
    // Mientras se carga el personaje
    return <Loading />
  }


  return (
    <div className="character-profile" >
      <div className="div-character-image">
        <img src={character.image} alt="character-image" />
      </div>
      <div className="div-info">
        <h2>{character.name}</h2>
        <p>{character.desciption}</p>

      </div>

    </div>
  )
}

export default useParamsEnComponenteHijo



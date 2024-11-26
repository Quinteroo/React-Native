import React from "react"
import "./Characters.css"
import { useState, useEffect } from "react"
import componenteExtraído from "./09-componenteExtraído"





const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {

    fetch("https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=20")
      .then((res) => res.json())
      .then((res) => { setCharacters(res.data) });
  }, [])



  return (
    < section className="image-character-container" >
      {characters.map((e) => ( //! key sse colocoa en el elemento más externo
        <componenteExtraído key={e._id} character={e} />  //! character es el nombre que le hemos puesto al props que le pasamos

      ))}

    </section >
  );
}


export default Characters
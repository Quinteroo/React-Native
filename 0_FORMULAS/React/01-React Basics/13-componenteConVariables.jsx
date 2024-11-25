import React from "react"
import "./Characters.css"
import { useState, useEffect } from "react"
import componenteExtraído from "./09-componenteExtraído"
import componentPagination from "./14-componentePagination"




const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {

    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}&limit=20`) //! page
      .then((res) => res.json())
      .then((res) => { setCharacters(res.data) });
  }, [page])


  return (
    < section className="image-character-container" >
      {characters.map((e) => (
        <componenteExtraído key={e._id} character={e} />

      ))}

      //! los estados se tienen que quedar en el elemento padre
      //! porque el envío de información es unidireccional de padres a hijos
      <componentPagination page={page} setPage={setPage} />

    </section >
  );
}


export default Characters
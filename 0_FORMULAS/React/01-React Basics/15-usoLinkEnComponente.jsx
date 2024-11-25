import React from "react"
import "./Characters.css"
import { useState, useEffect } from "react"
import componenteExtraído from "./09-componenteExtraído"
import componentPagination from "./14-componentePagination"
import { link } from "react-router-dom"




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
        //! key lo pasamos al componente
        <link key={e._id} to={`/character/${character._id}`} > //! /character/:id es una ruta ya definida
          <componenteExtraído character={e} />
        </link>

      ))}

      <componentPagination page={page} setPage={setPage} />

    </section >
  );
}


export default Characters
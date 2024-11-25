import React from "react"
import "./Characters.css"
import { useState, useEffect } from "react"
import componenteExtraído from "./09-componenteExtraído"





const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {

    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}&limit=20`) //! page
      .then((res) => res.json())
      .then((res) => { setCharacters(res.data) });
  }, [page]) //! importante que en el array de dependencias indiquemos en que se tiene que fijar si cambia para volver a hacer la llamda



  return (
    < section className="image-character-container" >
      {characters.map((e) => (
        <componenteExtraído key={e._id} character={e} />

      ))}

      <div className="pagination">
        <button onClick={() => setPage(page - 1)}>{"<"}</button>
        <p>{page}</p>
        <button onClick={() => setPage(page + 1)}>{">"}</button>
      </div>

    </section >
  );
}


export default Characters
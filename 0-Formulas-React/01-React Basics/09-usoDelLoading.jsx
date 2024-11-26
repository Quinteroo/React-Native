import React from "react"
import "./Characters.css"
import { useState, useEffect } from "react"
import loadingComponent from "./08-loadingComponent"

const Characters = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    //setCharacters([]) 
    //? al estar ya el array con los datos, no se aprecia ellaoding, no es necesario, pero se puede vaciar por si queremos darle un segundo de gloria

    fetch("https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=20")
      .then((res) => res.json())
      .then((res) => { setCharacters(res.data) });
    setLoading(false)
  }, [])

  return (
    < section className="image-character-container" >
      {loading && <loadingComponent />}
      {
        characters.map((e) => (
          <div className="character-card" key={e._id}>
            <div className="div-character-name">
              <h2>{e.name}</h2>
            </div>
            <div className="img-wrp">
              <img
                src={e.image}
                alt={e.name}
              />
            </div>
          </div>

        ))
      }

    </section >
  );
}

export default Characters
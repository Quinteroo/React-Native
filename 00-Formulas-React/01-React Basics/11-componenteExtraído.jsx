import "./componenteExtraído.css"

const componenteExtraído = ({ character }) => { //! character es el nombre del props que hemos puesto del cual hacemos destructuring

  <div className="character-card">
    <div className="div-character-name">
      <h2>{character.name}</h2>
    </div>
    <div className="img-wrp">
      <img
        src={character.image}
        alt={character.name}
      />
    </div>
  </div>



}

export default componenteExtraído
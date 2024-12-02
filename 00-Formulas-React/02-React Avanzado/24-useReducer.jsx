//! usarlo cuando tenemos varios estados pertenecientes a un mismo componente que podemos agrupar para 
// por ejemplo un juego que tiene muchos estados con useState y los agrupamos en uno solo



//* src\utils\reducer.

// creamos el estado inicial , es el que aglutina varios valores
const INITIAL_STATE = {
  points: 0,
  level: 1,
  countries: [],
  ramdonFlags: []
}



//y junto a él creamos el reducer que va a gestionar los estados
export const gameReducer = (state, action) => {

  /*const action = {
   type: "lo que sea"  //! action es un objeto
  } */

  switch (action.type) {
    case "SUMAR_PUNTUACION":
      return { ...state, points: state.points + 1 };
    case "RESTAR_PUNTUACION":
      return { ...state, points: state.points - 1 };
    case "SIGUIENTE_NIVEL":
      return { ...state, levels: state.levels + 1 };
    case "RELLENAR_COUNTRIES":
      return { ...state, countries: ["country1", "country2"] };
    default:
      return state;
  }
}



//? ======================================================================================


//*  \componente
// en el componente que lo queremos usar, en este caso, es App

import { useReducer } from "react";
import "./App.css";
import { INITIAL_STATE, gameReducer } from "./utils/reducer";

const App = () => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);//! como en useContext, nos traemos el estado y la función REducer

  const { points, countries, levels } = state;

  return (
    <div>
      <p>POINTS: {points}</p>
      <p>COUNTRIES: {console.log(countries)}</p>
      <p>LEVELS: {levels}</p>  //! dispatch (despachar) hace las funciones de setLoquesea,es decir, "despacha"/ ejecuta lo que le hayamos dicho en el reducer que haga
      <button onClick={() => dispatch({ type: "SUMAR_PUNTUACION" })}>
        sumar puntacion
      </button>
      <button onClick={() => dispatch({ type: "RESTAR_PUNTUACION" })}>
        restar puntuacion
      </button>
      <button onClick={() => dispatch({ type: "SIGUIENTE_NIVEL" })}>
        siguiente nivel
      </button>
      <button onClick={() => dispatch({ type: "RELLENAR_COUNTRIES" })}>
        rellenar paises
      </button>
    </div>
  );
};

export default App;



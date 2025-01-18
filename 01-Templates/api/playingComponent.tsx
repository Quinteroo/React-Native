import React from "react";
import { useFetch } from "./useFetch"; // Ruta del hook useFetch
import { MovieDBresponse } from "../movie-db.response"; // Ruta de la interfaz MovieDBresponse

const NowPlayingComponent = () => {
  const { data, loading, error } = useFetch<MovieDBresponse>( //!
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=TU_API_KEY"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Now Playing</h1>
      <ul>
        {data?.results.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NowPlayingComponent;


//! <MovieDBresponse> le estamos indicando el tipo de dato del json que esperamos recibir
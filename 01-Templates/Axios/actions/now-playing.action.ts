


import { movieApi } from "../movie-api";
import { MovieDBresponse } from "../movie-db.response";



export const nowPlayingAction = async () =>{  //*

  try {
    // aquí introducimos la petición http 
    const {data} = await movieApi.get<MovieDBresponse>("now_playing") //!

    console.log(JSON.stringify(data, null, 2)) // para que nos devuelva en formato JSON por la terminal
    return [] // lo ponemos vacío porque queremos ver simplemente que nos devuelve por consola
    
    // data. //?

  } catch (error) {
    console.log(error);
    throw "❌ No se pudo cargar el contenido de Now Playing"
     
  }
}



//* action hace referencia al tipo de petición que hacemos a la api


//! al ser typescript tenemos que indicar la INTERFACCE del tipo de dato (string, boolean...)
//! que va a recibir
//! /interfaces/movie-db.response.ts

//? al poner el tipado <MovieDBresponse> a la petición get, si escribimos data. podemos acceder
//? más facilmente a las propiedades de la información que hemos recibido

//todo   nowPlayingAction() para hacer la petición y recibir los datos

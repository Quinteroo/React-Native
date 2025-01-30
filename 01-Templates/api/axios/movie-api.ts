

// vamos a emplear Axios que es una manera más amigable de hacer peticiones fetch
// por la manera de introducir los datos

// intalamos axios //* npm i axios


import axios from "axios"


export const movieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  params:{
    language: "es-ES",
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY,
  }
})


// cada vez que usemos esta instacia de Axios va a tener por defecto esos parámetros
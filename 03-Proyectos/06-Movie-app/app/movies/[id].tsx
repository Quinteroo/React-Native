import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useFetch } from '@/hooks/useFetch'
import { MovieDetail } from '@/api/movie-detail.response'
import { ScrollView } from 'react-native-gesture-handler'
import MovieHeader from '@/components/MovieHeader/MovieHeader'


const URL = process.env.EXPO_PUBLIC_MOVIE_DB_URL
const API_KEY= process.env.EXPO_PUBLIC_MOVIE_DB_KEY





const MovieDetailsScreen = () => {

  const {id} = useLocalSearchParams() //! usando useLocalSearchParams para obtener el id, no necesitas pasarlo como prop.

  // aquí tenddríamos que hacer la petición Axios por ejemplo
  // siempre buscando que quede el código limpio
  // https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY&language=en-US
  const {data} = useFetch<MovieDetail>(`${URL}/${id}?api_key=${API_KEY}`)

  //console.log(JSON.stringify(data,null, 2)); //? para asegurar que recibimos los datos
  

  return (
    <ScrollView>
      <MovieHeader poster={data?.poster_path} title={data?.title} originalTitle={data?.original_title}/>


    </ScrollView>

  )
}

export default MovieDetailsScreen
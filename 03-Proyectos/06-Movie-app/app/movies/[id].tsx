import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useFetch } from '@/hooks/useFetch'
import { MovieDetail } from '@/api/movie-detail.response'
import { ScrollView } from 'react-native-gesture-handler'
import MovieHeader from '@/components/MovieHeader/MovieHeader'
import MovieBody from '@/components/MovieBody/MovieBody'
import MovieActors from '@/components/MovieActors/MovieActors'


const URL = process.env.EXPO_PUBLIC_MOVIE_DB_URL
const API_KEY= process.env.EXPO_PUBLIC_MOVIE_DB_KEY





const MovieDetailsScreen = () => {

  const {id} = useLocalSearchParams() //! usando useLocalSearchParams para obtener el id, no necesitas pasarlo como prop.
  const movieId = Number(id)
  // aquí tenddríamos que hacer la petición Axios por ejemplo
  // siempre buscando que quede el código limpio
  // https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY&language=en-US
  const {data, loading} = useFetch<MovieDetail>(`${URL}/${id}?api_key=${API_KEY}`)

  // console.log(JSON.stringify(data,null, 2)); //? para asegurar que recibimos los datos
  
  if (loading) return <Text>Loading...</Text>;
  if (!data) return <Text>Error fetching movie data</Text>;

  return (
    <ScrollView>
      <MovieHeader poster={data?.poster_path} title={data?.title} originalTitle={data?.original_title}/>
      <MovieBody movie={data} />
      <MovieActors movieId={movieId}/>

    </ScrollView>

  )
}

export default MovieDetailsScreen
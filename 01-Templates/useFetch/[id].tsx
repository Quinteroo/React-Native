import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useFetch } from '@/hooks/useFetch'
import { MovieDetail } from '@/api/movie-detail.response'
import { ScrollView } from 'react-native-gesture-handler'
import MovieHeader from '@/components/MovieHeader/MovieHeader'
import MovieBody from '@/components/MovieBody/MovieBody'


const URL = process.env.EXPO_PUBLIC_MOVIE_DB_URL
const API_KEY= process.env.EXPO_PUBLIC_MOVIE_DB_KEY


const MovieDetailsScreen = () => {

  const {id} = useLocalSearchParams()
  const {data, loading} = useFetch<MovieDetail>(`${URL}/${id}?api_key=${API_KEY}`)
 
  if (loading) return <Text>Loading...</Text>; //! A
  if (!data) return <Text>Error fetching movie data</Text>; //! A

  return (
    <ScrollView>
      <MovieHeader poster={data?.poster_path} title={data?.title} originalTitle={data?.original_title}/>
      <MovieBody movie={data} /> //! A 

    </ScrollView>
  )
}

export default MovieDetailsScreen
//! A >> al ejecutar el loading nos aseguramos que los datos que pasamos en MovieBody
//! procedentes del useFetch siempre son del tipo <MovieDetail> 
//! evitando tener que indicar en el componente MovieBody la posibilidad de que
//! sea de tipo null 👇🏼👇🏼

interface Props {
  movie?: MovieDetail | null,   //* evitamos esta sintaxis
}


const MovieBody = ({movie}:Props) => {
  return (
    <View>
      <Text>{movie?.vote_average}</Text>

    </View>
  )
}
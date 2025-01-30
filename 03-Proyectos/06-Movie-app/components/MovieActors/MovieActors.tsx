import { View, Text, Image } from 'react-native'
import React from 'react'
import { useFetch } from '@/hooks/useFetch'
import { FlatList } from 'react-native-gesture-handler'
import { Cast, TopLevel } from '@/api/movie-actors.response'
import MovieActorDetail from '../MovieActorDetail/MovieActorDetail'


interface Props {
  movieId: number
}

const API_KEY= process.env.EXPO_PUBLIC_MOVIE_DB_KEY

const MovieActors = ({movieId}:Props) => {

  const {data, loading} = useFetch<TopLevel>(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`)

  if(loading) return <Text>Esperando datos de actores</Text>
  if(!data) return <Text>Error al recibir la info de actores</Text>

  //console.log(data);
  const dataActors = data.cast.splice(0,10)

  return (
    <View style={{paddingLeft:10}}>
      <Text style={{fontSize:20, textDecorationLine:"underline"}}>Actors</Text>
      <FlatList
      horizontal
      data={dataActors}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}:{item:Cast}) =>(
        <View>
          <Image
          source={{uri:`https://image.tmdb.org/t/p/w500/${item.profile_path}`}}
          style={{
            height: 200,
            width: 100,
            margin:10,
            borderRadius:10
          }}

          />

        </View>
       )} 
      
      
      />
    </View>
  )
}

export default MovieActors
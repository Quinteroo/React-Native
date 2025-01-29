import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useFetch } from '@/hooks/useFetch'
import { MovieDBresponse, Result } from '@/api/movie-db.response'
import MoviePoster from './MoviePoster'



let api_key = process.env.EXPO_PUBLIC_MOVIE_DB_KEY



const FlatListHorizontal = () => {
  
  const {data, loading, error} =useFetch<MovieDBresponse>(`https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=${api_key}`)
  // console.log("error en el fetch:", data);
  
  
  return (
    <View>
      <Text style={{paddingLeft: 20, fontSize:25, fontWeight:600}}>FlatList Horizontal</Text>
      <FlatList 
      horizontal
      data={data?.results}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}:{item:Result}) =>(
        <MoviePoster id={item.id} poster={item.poster_path} smallPoster/>
      )}
      />
    </View>
  )
}

export default FlatListHorizontal
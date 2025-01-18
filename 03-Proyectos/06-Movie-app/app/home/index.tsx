import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useFetch } from '@/hooks/useFetch'
import { MovieDBresponse } from '@/api/movie-db.response'

const homeScreen = () => {

  const {data, loading, error} =useFetch<MovieDBresponse>("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=16db01fbf10a9eca2abe15b911b9a690")
  
  if(loading){
    return (
      <View style={{flex: 1, display: "flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator color="purple" size={40} />
      </View>
    )
  }
  
  return (
    <View>
      <Text>homeScreen</Text>
    </View>
  )
}

export default homeScreen
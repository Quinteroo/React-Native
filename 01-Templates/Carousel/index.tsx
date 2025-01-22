import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useFetch } from '@/hooks/useFetch'
import { MovieDBresponse } from '@/api/movie-db.response'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import MoviesCarousel from '@/components/Carousel' //! A

import MyCarousel from "../../components/MyCarousel"
import FlatListHorizontal from '@/components/FlatListHorizontal'

let api_key = process.env.EXPO_PUBLIC_MOVIE_DB_KEY


const homeScreen = () => {

  const {data, loading, error} =useFetch<MovieDBresponse>(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${api_key}`)
  const safeArea = useSafeAreaInsets()


  if(loading){
    return (
      <View style={{flex: 1, display: "flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator color="purple" size={40} />
      </View>
    )
  }


  return (
    <View style={{paddingTop: safeArea.top, marginTop:10}}>
      <FlatListHorizontal />

      <Text style={{paddingLeft: 20, fontSize:25, fontWeight:600}}>homeScreen</Text>
      {
      data ? <MoviesCarousel movies={data} /> //! B 
      : "No acceso a films" //* C
      }

      <Text style={{paddingLeft: 20, fontSize:25, fontWeight:600}}>Carousel Gatitos</Text>
      <MyCarousel />

      
    </View>
  )
}

export default homeScreen

//! A >> Cuidado con las importaciones

//! B >> las props tienen que ser las mismas

//* C >> los objetos recibidos a traves de peticiones fetch pueden dar error o ser undefine
//* en ese caso hay que hacer un ternario, si no typeScrip NO lo acepta
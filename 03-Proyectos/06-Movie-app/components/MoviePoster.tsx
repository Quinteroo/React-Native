import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'


interface Props {  //!
  id: number,
  poster: string, // le pasamos la url de la imagen
  smallPoster?: boolean, // para hacerlo reutilizable en otros componentes como flatlist
}

const MoviePoster = ({id,poster,smallPoster=false}:Props) => {



  return (
    <Pressable
    onPress={()=> router.push(`/movies/${id}`)}
    >
      <Image 
      source={{uri:`https://image.tmdb.org/t/p/w500${poster}`}}
      style={{
        width: smallPoster ? 85 : 150,
        height: smallPoster ? 130 : 250,
        borderRadius:20
      }}
      resizeMode='cover'
      
      />
    </Pressable>
  )
}

export default MoviePoster
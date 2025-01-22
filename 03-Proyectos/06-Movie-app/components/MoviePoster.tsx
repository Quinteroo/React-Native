import { View, Text } from 'react-native'
import React from 'react'


interface Props {  //!
  id: number,
  poster: string, // le pasamos la url de la imagen
  smallPoster: boolean, // para hacerlo reutilizable en otros componentes como flatlist
}

const MoviePoster = ({id,poster,smallPoster}:Props) => {



  return (
    <View>
      <Text>MoviePoster</Text>
    </View>
  )
}

export default MoviePoster
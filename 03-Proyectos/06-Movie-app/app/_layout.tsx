import { View, Text } from 'react-native'
import React from 'react'
import { nowPlayingAction } from '@/api/actions/now-playing.action'
import { useFetch } from '@/hooks/useFetch'
import { MovieDBresponse } from '@/api/movie-db.response'

const RootLayout = () => {


  
  
  return (
    <View>
      <Text>RootLayout!!!!</Text>
    </View>
  )
}

export default RootLayout
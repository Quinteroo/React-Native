import { View, Text } from 'react-native'
import React from 'react'
import { MovieDetail } from '@/api/movie-detail.response'
import { formatNumberWithDots } from '@/utils/modifyNumber'

interface Props {
  movie: MovieDetail,
}


const MovieBody = ({movie}:Props) => {
  return (
    <View style={{width:"100%", paddingLeft: 10, paddingRight: 15, gap:10}}>
      <View 
      style={{
        backgroundColor:"yellow", height:45, width:45, borderRadius:"100%",
        display: "flex", justifyContent:"center", alignItems:"center"
        }}>
        <Text style={{fontSize:25}}>{movie?.vote_average.toFixed(1)}</Text>

      </View>
      <Text style={{fontSize: 18}}>{movie?.overview}</Text>
      <Text style={{fontSize: 18}}>{movie?.runtime} min</Text>
      <Text style={{fontSize: 20, fontWeight:600}}>$ {formatNumberWithDots(movie?.budget)}</Text>
    </View>
  )
}

export default MovieBody
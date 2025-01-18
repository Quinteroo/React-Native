import React from "react";
import { View, Text, ActivityIndicator, FlatList, StyleSheet, Image } from "react-native";
import { useFetch } from "./useFetch"; // Ruta del hook useFetch
import { MovieDBresponse } from "./movie-db.response"; // Ruta de la interfaz MovieDBresponse

const NowPlayingComponent = () => {
  const { data, loading, error } = useFetch<MovieDBresponse>(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=TU_API_KEY"
  );


  if(loading){
    return (
      <View style={{flex: 1, display: "flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator color="purple" size={40} /> //!!
      </View>
    )
  }


  return (
    <View >
      <Text >Now Playing</Text>

    </View>
  );
};

export default NowPlayingComponent;

//! activityIndicator es el Loading por defecto de los dispositivos Android e iOS.
//! el view que lo contiene tendríamos que hacerlo flex-1 para que ocupe toda la pantalla
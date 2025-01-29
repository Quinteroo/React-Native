import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface Props {
  poster?: string,
  title?: string,
  originalTitle?: string
}

const MovieHeader = ({poster, title, originalTitle}:Props) => {
const {height} = useWindowDimensions()  //! A

  return (
    <>
    <View 
    style={{position:"absolute", top: 45, left: 15, zIndex:1}}
    >
      <Pressable
      onPress={router.back}
      >
        <Ionicons
        name='arrow-back'
        size={30}
        color="white"
        />
      </Pressable>
    </View>
    <View
    style={{height: height * 0.7}} //! A
    >
      <View style={{flex:1, borderBottomLeftRadius: 25, borderBottomRightRadius:25, overflow: "hidden"}}>
      <Image 
      source={{uri:`https://image.tmdb.org/t/p/w500/${poster}`}}
      style={{ flex:1}}
      resizeMode='cover'
      />
      </View>
    </View>
    <View style={{margin:10}}>
      <Text style={{fontSize:20}}>{originalTitle}</Text>
      <Text style={{fontSize:25, fontWeight:600}}>{title}</Text>
    </View>
    
    </>
  )
}

export default MovieHeader


//! A >> estamos tomando las dimensiones de la pantalla, más concretamente el 70%
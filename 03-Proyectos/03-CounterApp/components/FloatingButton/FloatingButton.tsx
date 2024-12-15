import {  Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
  label : string;

  position?: "left" | "right"

  //Methods
  onPress?: ()=> void;
  onLongPress?: ()=> void; // ponemos ? porque noson obligatorios pasarlos

} 


export default function FloatingButton(
  {label, onPress, onLongPress,
    position = "right"}:Props){
  return (
      <Pressable 
      style={({pressed})=>
      [
        styles.floatingButton,
        position === "right"?styles.positionRight : styles.positionLeft,
        pressed ? {opacity : 0.7} : {opacity:1}
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
      >
        <Text style={{color:"white", fontSize:20}}>{label}</Text>
      </Pressable>
  )
}


const styles = StyleSheet.create({
  floatingButton:{
    backgroundColor:"#a435f0",
    padding:15,
    borderRadius:20,
    position: "absolute",
    bottom: 30,
  },

  positionRight:{
    right: 30
  },

  positionLeft :{
    left: 30
  }
});
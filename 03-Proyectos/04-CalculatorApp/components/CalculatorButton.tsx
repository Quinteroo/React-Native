import { Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import * as Haptics from 'expo-haptics';



interface Props {
  label: string,
  color?: string,
  big?:boolean,
  blackText?: boolean,
  onPress?:() => void
}

const CalculatorButton = ({label, color, big =false, blackText=false, onPress} : Props) => {
  return (
  <Pressable
  style={({pressed})=>({
    ...styles.button,
    backgroundColor: color ? color : Colors.darkGRay,
    maxWidth: big ? 190 : styles.button.maxWidth,
    opacity: pressed? 0.8 : 1
  })}
  onPress={()=>
  {
    Haptics.selectionAsync(),
    onPress
  }}
  
  >
    <Text style={
      {...styles.textButton, //! al hacer spread operator, las condicuiones que escribamos despues se sobreescribeen
        color: blackText ? "black" : "white",

      }

   }>
      {label}
    </Text>
  </Pressable>
  )
}

export default CalculatorButton


const styles = StyleSheet.create({
  button:{
    padding: 10,
    maxWidth: 80,
    height:80,
    margin:10,
    borderRadius: 50,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  textButton:{
    color: Colors.textPrimary,
    fontFamily: "SpaceMono",
    fontWeight: 300,
    fontSize: 25

  }
})
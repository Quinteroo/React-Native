import { Text, PressableProps, Pressable, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props extends PressableProps{
  onPress?:()=> void,
  children:string,
  style?: StyleProp<ViewStyle> //! A
  className?: string,
}

const ThemedButton = ({onPress, children,style}:Props) => {
  const backgroundColor= useThemeColor({light: "pink", dark: "yellow"},'background')

  return (
    <Pressable
    style={[{
      backgroundColor: backgroundColor,
      width:150,
      height:75,
      justifyContent:"center",
      borderRadius:20
    },style]}
    className='active:opacity-65'
    onPress={onPress}
    >
      <Text style={{fontWeight:"bold", textAlign:"center", fontSize:20}}>{children}</Text>
    </Pressable>
  )
}

export default ThemedButton
//! A 
//! >>TextProps ya incluye style, por lo que en ThemedText no es necesario especificarlo.
//! >>Para otros componentes, como Pressable, que no extienden una interfaz con 
//! style incluido, debes declararlo explícitamente en tu interfaz.
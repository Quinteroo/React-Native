


import { View, Text, TextProps } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props extends TextProps{
  bold?: boolean,
}


const ThemedText = ({bold= false,style, children}:Props) => {

  const color = useThemeColor({}, "text")

  return (
    <Text style={[
      {
        color: color,
        fontWeight: bold ? "bold" : "normal",
        marginLeft: 10,
      },
      style
    ]}>
      {children}
    </Text>
  )
}

export default ThemedText
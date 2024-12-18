import { Text, TextProps } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/styles/styles'

interface Props extends TextProps{
  variant?: "h1" | "h2"
}

const CustomText = ({children,variant, ...rest}:Props) => {
  return (

      <Text 
      style={[{color:"white", fontFamily:"SpaceMono"},
        variant === "h1" && GlobalStyles.mainResult,
        variant === "h2" && GlobalStyles.subResult
      ]}

      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
      >
        {children}
      </Text>

  )
}

export default CustomText
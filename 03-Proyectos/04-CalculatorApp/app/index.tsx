import { View} from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/styles/styles'
import CustomText from '@/components/CustomText'

const CalculatorApp =()=> {
  return (
    <View style={GlobalStyles.calculatorContainer}>
      <CustomText variant="h1">50 + 50</CustomText>
      <CustomText variant="h2">100</CustomText>
    </View>
  )
}

export default CalculatorApp
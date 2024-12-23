import { View} from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/styles/styles'
import CustomText from '@/components/CustomText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp =()=> {

  const {formula, buildNumber} = useCalculator()
  return (
    <>
    <View style={GlobalStyles.calculatorContainer}>
      <CustomText variant="h1">{formula}</CustomText>
      <CustomText variant="h2">100</CustomText>
    </View>
    <View style={GlobalStyles.row}>
    <CalculatorButton label="C" blackText color={Colors.lightGray} onPress={()=>console.log("hola")}/>
    <CalculatorButton label="+/-" blackText color={Colors.lightGray} onPress={()=>console.log("hola")}/>
    <CalculatorButton label="del" blackText color={Colors.lightGray} onPress={()=>console.log("hola")}/>
    <CalculatorButton label="÷" color={Colors.orange} onPress={()=>console.log("hola")}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='7' onPress={()=>buildNumber("7")}/>
      <CalculatorButton label='8' onPress={()=>buildNumber("8")}/>
      <CalculatorButton label='9' onPress={()=>buildNumber("9")}/>
      <CalculatorButton label='X'  color={Colors.orange} onPress={()=>console.log("jijiji")}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='4' onPress={()=>buildNumber("4")}/>
      <CalculatorButton label='5' onPress={()=>buildNumber("5")}/>
      <CalculatorButton label='6' onPress={()=>buildNumber("6")}/>
      <CalculatorButton label='-' color={Colors.orange} onPress={()=>console.log("jijiji")}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='1' onPress={()=>buildNumber("1")}/>
      <CalculatorButton label='2' onPress={()=>buildNumber("2")}/>
      <CalculatorButton label='3' onPress={()=>buildNumber("3")}/>
      <CalculatorButton label='+' color={Colors.orange} onPress={()=>console.log("jijiji")}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='0' big onPress={()=>buildNumber("0")}/>
      <CalculatorButton label='.' onPress={()=>buildNumber(".")}/>
      <CalculatorButton label='=' color={Colors.orange} onPress={()=>console.log("jijiji")}/>
    </View>
    </>

  )
}

export default CalculatorApp
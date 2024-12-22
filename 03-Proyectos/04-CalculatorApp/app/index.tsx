import { View} from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/styles/styles'
import CustomText from '@/components/CustomText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'

const CalculatorApp =()=> {
  return (
    <>
    <View style={GlobalStyles.calculatorContainer}>
      <CustomText variant="h1">50 + 50</CustomText>
      <CustomText variant="h2">100</CustomText>
    </View>
    <View style={GlobalStyles.row}>
    <CalculatorButton label="C" blackText color={Colors.lightGray} onPress={()=>console.log("hola")}/>
    <CalculatorButton label="+/-" blackText color={Colors.lightGray} onPress={()=>console.log("hola")}/>
    <CalculatorButton label="del" blackText color={Colors.lightGray} onPress={()=>console.log("hola")}/>
    <CalculatorButton label="÷" color={Colors.orange} onPress={()=>console.log("hola")}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='7' onPress={()=>console.log("jijiji")}/>
      <CalculatorButton label='8' onPress={()=>console.log("jijiji")}/>
      <CalculatorButton label='9' onPress={()=>console.log("jijiji")}/>
      <CalculatorButton label='X'  color={Colors.orange} onPress={()=>console.log("jijiji")}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='4' onPress={()=>console.log("jijiji")}/>
      <CalculatorButton label='5' onPress={()=>console.log("jijiji")}/>
      <CalculatorButton label='6' onPress={()=>console.log("jijiji")}/>
      <CalculatorButton label='-' color={Colors.orange} onPress={()=>console.log("jijiji")}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='1' onPress={()=>console.log("jijiji")}/>
      <CalculatorButton label='2' onPress={()=>console.log("jijiji")}/>
      <CalculatorButton label='3' onPress={()=>console.log("jijiju")}/>
      <CalculatorButton label='÷' color={Colors.orange} onPress={()=>console.log("jijiji")}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='0' big onPress={()=>console.log("jijiji")}/>
      <CalculatorButton label='.' onPress={()=>console.log("jijiji")}/>
      <CalculatorButton label='X' color={Colors.orange} onPress={()=>console.log("jijiji")}/>
    </View>
    </>

  )
}

export default CalculatorApp
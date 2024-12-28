import { View} from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/styles/styles'
import CustomText from '@/components/CustomText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp =()=> {
  console.log("✅ Iniciando Calculator App");
  

  const {formula,number, prevNumber, buildNumber, clean, toggleSing, deleteLast, divideOperation, substrackOperation,multiplyOperation, addOperation,calculateSubResult,calculateResult,} = useCalculator()
  return (
    <>
    <View style={GlobalStyles.calculatorContainer}>
      <CustomText variant="h1">{formula}</CustomText>

      {
        formula === prevNumber ? (
        <CustomText variant="h2"> </CustomText>
        ) : (
        <CustomText variant="h2">{prevNumber}</CustomText>
        )
      }

    </View>
    <View style={GlobalStyles.row}>
    <CalculatorButton label="C" blackText color={Colors.lightGray} onPress={clean}/>
    <CalculatorButton label="+/-" blackText color={Colors.lightGray} onPress={toggleSing}/>
    <CalculatorButton label="del" blackText color={Colors.lightGray} onPress={deleteLast}/>
    <CalculatorButton label="÷" color={Colors.orange} onPress={divideOperation}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='7' onPress={()=>buildNumber("7")}/>
      <CalculatorButton label='8' onPress={()=>buildNumber("8")}/>
      <CalculatorButton label='9' onPress={()=>buildNumber("9")}/>
      <CalculatorButton label='X'  color={Colors.orange} onPress={multiplyOperation}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='4' onPress={()=>buildNumber("4")}/>
      <CalculatorButton label='5' onPress={()=>buildNumber("5")}/>
      <CalculatorButton label='6' onPress={()=>buildNumber("6")}/>
      <CalculatorButton label='-' color={Colors.orange} onPress={substrackOperation}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='1' onPress={()=>buildNumber("1")}/>
      <CalculatorButton label='2' onPress={()=>buildNumber("2")}/>
      <CalculatorButton label='3' onPress={()=>buildNumber("3")}/>
      <CalculatorButton label='+' color={Colors.orange} onPress={addOperation}/>
    </View>
    <View style={GlobalStyles.row}>
      <CalculatorButton label='0' big onPress={()=>buildNumber("0")}/>
      <CalculatorButton label='.' onPress={()=>buildNumber(".")}/>
      <CalculatorButton label='=' color={Colors.orange} onPress={calculateResult}/>
    </View>
    </>

  )
}

export default CalculatorApp
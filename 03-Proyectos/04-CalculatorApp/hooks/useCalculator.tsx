import { useEffect, useRef, useState } from "react"


enum Operator{
  add ="+",
  substrack= "-",
  multiply = "*",
  divide = "/"

}


export const useCalculator = () =>{

  const [formula, setFormula] = useState("0")

  const [number, setNumber] = useState("0")
  const [prevNumber, setPrevNumber] = useState("0")

  const lastOperator = useRef<Operator>()

  useEffect(()=>{
    setFormula(number)
  },[number])

  const clean = ()=>{
    setNumber("0")
    setFormula("0")
    setPrevNumber("0")

    lastOperator.current =undefined

  }

  const toggleSing = ()=>{
    if(number.startsWith("-")){
      setNumber(number.replace("-",""))
    }else{
      setNumber("-"+number)
    }

  }

  const deleteLast = ()=>{

    if(number.startsWith("-") && number.length >2){
      setNumber(number.slice(0,-1))
    }else if(number.startsWith("-") && number.length === 2){
      setNumber("0")
    }else if(number.length >= 2){
      setNumber(number.slice(0, -1 ))
    }else if(number.length === 1){
      setNumber("0")
    }


  }

  const buildNumber = (numberString: string) => {
    // Verificar si ya existe el punto decimal
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de cero, no hay punto y es el primer número
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // Evitar el 0000000.00
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  return {
    //Props
    formula,
    number,
    prevNumber,
    lastOperator,

    // Methods
    buildNumber,
    clean,
    toggleSing,
    deleteLast,
  }

}
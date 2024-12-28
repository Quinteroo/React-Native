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
    if(lastOperator.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);
    }else{
      setFormula(number)
    }
  },[number])

  useEffect(()=>{
    const subResult = calculateSubResult()
    setPrevNumber(`${subResult}`)
  },[formula])

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

  const setLastNumber = () =>{
    calculateResult()
    if(number.endsWith(".")){
      setPrevNumber(number.slice(0,-1))
    } 
    setPrevNumber(number)
    setNumber("0")
  }

  const divideOperation = ()=>{
    setLastNumber()
    lastOperator.current = Operator.divide;
  }

  const multiplyOperation = ()=>{
    setLastNumber()
    lastOperator.current = Operator.multiply;
  }

  const substrackOperation = ()=>{
    setLastNumber()
    lastOperator.current = Operator.substrack;
  }

  const addOperation = ()=>{
    setLastNumber()
    lastOperator.current = Operator.add;
  }


  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue); // NaN

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.substrack :
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error(`Operation ${operation} not implemented`);
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperator.current = undefined;
    setPrevNumber('0');
  };

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
    
    divideOperation,
    multiplyOperation,
    substrackOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  }

}
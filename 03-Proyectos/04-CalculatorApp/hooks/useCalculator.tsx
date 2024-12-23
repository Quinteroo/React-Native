import { useRef, useState } from "react"


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

  const buildNumber = (numberString:string)=>{
    console.log({buildNumber})
  }

  return {
    formula,
    number,
    prevNumber,
    lastOperator,
    buildNumber
  }

}
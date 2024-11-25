import { useRef, memo, useReducer, useCallback } from "react";
import "./Calculator.css";

const INITIAL_CALCULATOR_STATE = {
  n1: 0,
  operation: "",
  n2: 0,
  result: 0,
  historicResults: [],
  historicResultsSorted: [],
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "SET_OPERATION":
      return {
        ...state,
        n1: parseFloat(action.payload.inputValue), // convierte a número
        operation: action.payload.operation,
      };

    case "RESULT":
      const n2 = parseFloat(action.payload.inputValue); // Almacena el segundo número
      let result;

      // Realiza la operación basada en el valor de 'operation'
      switch (state.operation) {
        case "+":
          result = state.n1 + n2;
          break;
        case "-":
          result = state.n1 - n2;
          break;
        case "*":
          result = state.n1 * n2;
          break;
        case "/":
          result = n2 !== 0 ? state.n1 / n2 : "Error"; // Evita división por 0
          break;
        case "%":
          result = state.n1 % n2;
          break;
        default:
          result = "Operación no válida";
      }

      return {
        ...state,
        n2: n2,
        result: result,
        historicResults: [...state.historicResults, result],
        historicResultsSorted: [...state.historicResults].sort((a, b) => a - b), // Acceso a state
      };

    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, INITIAL_CALCULATOR_STATE);
  const input = useRef();

  const { result, historicResultsSorted } = state;

  const setOperation = useCallback(
    (operation) => {
      dispatch({
        type: "SET_OPERATION",
        payload: { inputValue: input.current.value, operation: operation },
      });
      input.current.value = ""; // Limpiar el input después de seleccionar una operación
    },
    [dispatch]
  );

  const handleResult = () => {
    dispatch({
      type: "RESULT",
      payload: { inputValue: input.current.value }, // Pasamos el valor del input
    });
    input.current.value = ""; // Limpiar el input después del cálculo
  };


  //! En React, los componentes despachan las acciones, y cuando lo hacen, proporcionan los datos 
  //! necesarios en action.payload. El reducer simplemente recibe estos datos y actualiza 
  //! el estado basándose en ellos.

  return (
    <div className="calc">
      <input type="number" ref={input} />
      <div className="operations">
        <button onClick={() => setOperation("+")}>+</button>
        <button onClick={() => setOperation("-")}>-</button>
        <button onClick={() => setOperation("*")}>X</button>
        <button onClick={() => setOperation("/")}>/</button>
        <button onClick={() => setOperation("%")}>%</button>
        <button onClick={handleResult}>=</button>
      </div>
      <h2>Último resultado: {result}</h2>
      <div className="historic">
        <h2>Resultados históricos</h2>
        {historicResultsSorted.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </div>
    </div>
  );
};

export default memo(Calculator);

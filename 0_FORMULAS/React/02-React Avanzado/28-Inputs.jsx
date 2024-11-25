import React, { useState } from "react";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState(""); // Estado para manejar el valor del input

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Actualiza el estado con el valor del input
  };

  const clearInput = () => {
    setInputValue(""); // Vacía el valor del input
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue} // El valor del input es controlado por el estado
        onChange={handleInputChange}
        placeholder="Escribe algo"
      />
      <button onClick={clearInput}>Limpiar</button> {/* Botón para borrar el input */}
    </div>
  );
};

export default InputComponent;

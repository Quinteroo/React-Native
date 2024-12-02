import { useState } from 'react';

// Custom hook: useInput
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};






// Componente que utiliza el custom hook
const InputComponent = () => {
  const { value, onChange } = useInput('');

  return <input value={value} onChange={onChange} />
};
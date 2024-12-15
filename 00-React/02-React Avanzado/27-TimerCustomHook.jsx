

//* \CUSTOM HOOKS\USETIMER.JSX

import { useState, useEffect } from "react";


export const useLocalTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // Actualiza la hora cada segundo
    }, 1000);

    // Limpieza del intervalo cuando se desmonta el componente
    return () => clearInterval(interval);
  }, []); // Solo se ejecuta al montar el componente

  return { time };
};


//? ================================================================




//* \COMPONENT\TIMER\TIMER.JSX

import "./Timer.css";
import { useLocalTimer } from "../../Custom Hooks/useLocalTimer";

const Timer = () => {
  const { time } = useLocalTimer();

  return (
    <>
      <p>{time.toLocaleTimeString()}</p>
    </>
  );
};

export default Timer;
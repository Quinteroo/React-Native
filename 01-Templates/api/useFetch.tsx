import { useState, useEffect } from 'react';

// Definimos los tipos
interface FetchState<T> { //!
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Hook useFetch
export function useFetch<T>(url: string): FetchState<T> { //!
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null); // Reseteamos error antes de la nueva solicitud
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Se vuelve a ejecutar si cambia la URL //?

  return { data, loading, error }; //*
}

//! La interfaz FetchState<T> define los estados del hook.
//! Utiliza un tipo genérico T para que sea flexible y acepte cualquier estructura de datos.
//* Maneja los estados data, loading y error
//? Recalcula la solicitud cuando cambia la URL.

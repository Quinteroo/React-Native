import React, { useEffect } from 'react';
import { Slot, SplashScreen } from 'expo-router';
import { useFonts } from "expo-font";
import "./global.css";

SplashScreen.preventAutoHideAsync() //! podemos renderizar el SplashScreen mientras se cargan las fonts


const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"), //* el path (directorio) donde se encuentran las fuentes
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  
  });

  useEffect(() => {
    if (error) {
      throw error; // Lanzar el error si ocurre
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Ocultar el SplashScreen cuando las fuentes estén cargadas
    }
  }, [fontsLoaded, error]);

  // Mostrar nada hasta que las fuentes estén cargadas o haya un error
  if (!fontsLoaded) {
    return null;
  }



  return <Slot/>
};

export default RootLayout
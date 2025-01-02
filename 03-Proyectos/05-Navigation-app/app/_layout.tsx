import React, { useEffect } from 'react';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from "expo-font";
import "./global.css";
import { SafeAreaView } from 'react-native';

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // Iniciar el SplashScreen mientras se cargan las fuentes

    if (error) {
      throw error; // Lanzar error si ocurre
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Ocultar el SplashScreen cuando las fuentes estén cargadas
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null; // Mostrar nada hasta que las fuentes estén cargadas
  }

  return (

      <Slot />

  

  )
};

export default RootLayout;

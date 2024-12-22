import { View, Platform } from 'react-native'
import React from 'react'
import { Slot } from "expo-router";
import {useFonts} from "expo-font"
import {StatusBar} from "expo-status-bar"
import * as NavigationBar from 'expo-navigation-bar';

import { GlobalStyles } from '@/styles/styles';



const isAndroid = Platform.OS === "android"

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black"); // o el color que sea
}

const RootLayout = () => {



  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={GlobalStyles.background}>
      <Slot/>
      <StatusBar style='light'/>
    </View>
  )
}

export default RootLayout

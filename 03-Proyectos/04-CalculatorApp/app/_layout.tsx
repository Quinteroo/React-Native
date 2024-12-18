import { View } from 'react-native'
import React from 'react'
import { Slot } from "expo-router";
import {useFonts} from "expo-font"
import {StatusBar} from "expo-status-bar"

import { GlobalStyles } from '@/styles/styles';

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

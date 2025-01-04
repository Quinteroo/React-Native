import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white"
        }
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title:"Home Screen"
        }}
      />

     <Stack.Screen
        name="products/index"
        options={{
          title:"Products Screen",
          animation:"ios_from_left"
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title:"Profile Screen"
        }}
      />
    </Stack>
  )
}

export default StackLayout
import { Text, View } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import 'react-native-reanimated';

import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useColorScheme } from '@/hooks/useColorScheme';
import { allRoutes } from '@/constants/Routes';

import "../global.css"
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';



export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background') //! useTheme es un hook proporcionado por el equipo de EXPO

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{backgroundColor: "grey", flex: 1}}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        <Stack
        screenOptions={{  //! de esta manera da la impresión que todo es una misma piezz
          headerShadowVisible: false,
          contentStyle:{
            backgroundColor: backgroundColor
          },
          headerStyle:{
            backgroundColor:backgroundColor
          }
        }}
        >
          <Stack.Screen
          name="index"
          options={{
            title:""
          }}
          />

          {
            allRoutes.map((route)=>(
              <Stack.Screen 
              key={route.name}
              name={route.name}
              options={{
                title: route.title
              }}
              />
            ))
          }

        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

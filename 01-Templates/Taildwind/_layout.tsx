import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import { Text, View } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import {GestureHandlerRootView} from "react-native-gesture-handler"

import "../global.css" //! importante importar global.css
import { useThemeColor } from '@/hooks/useThemeColor';



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
    <GestureHandlerRootView style={{backgroundColor: backgroundColor, flex: 1}}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View className='bg-light-background dark:bg-dark-background'>
        <Text className='mt-10 text-3xl text-light-text dark:text-dark-text'>hola mundooo</Text>
      </View>

    </ThemeProvider>


    </GestureHandlerRootView>
  );
}

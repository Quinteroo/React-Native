import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import { Text } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';


import "../global.css" //! importar global.css para usar taildwind



export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Text className='text-3xl text-center font-bold'>hola mundo</Text>
    </ThemeProvider>
  );
}

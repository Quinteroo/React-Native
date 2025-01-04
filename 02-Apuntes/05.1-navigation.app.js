
//! NAVIGATION APP
// En esta sección continuaremos trabajando con nuestra aplicación de navegación, 
// pero añadiendo funcionalidades nuevas como:
Drawer
Tabs
Icons
Dispatch
Controlnavegación
ColoresYpersonalización
ControlAppDirectory

//? https://docs.expo.dev/router/advanced/tabs/


//! TABS
// nos ayuda a configurar una barra de navegación ene l bottom de la pantalla del dispositivo
// la configuración es parecida a Stack

// en /app creamos la carpteta /tabs (sin paréntesis en este caso)
// creamos /app/tabs/_layout.tsx  rnfe TabsLayout

// en /app/index.tsx hacemos que <Redirect apunte a href="/tabs"

// con una configuración parecida a la de de Stack escribimos los Tabs y Tabs.Screen

import FontAwesome from '@expo/vector-icons/FontAwesome'; //! podemos usar ionicons en vez de fontAwesome (Expo trabaja con react-native-vector-icons)
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}

// para poder ver nuestro (Stack) en los tabs tenemos que meter la carpteta dentro
// /app/tabs/(stack)

// configuarmos un nuevo Tabs.Screen que apunte a la carpeta
// name="(stack)"
// configuramos los iconos etc


//! actualizar enlaces
// para que los enlaces del stack que hemos metido dentro del tab funcione tenemos que actualizar los links
<CustomButton color="primary" onPress={() => router.push("/tabs/(stack)/products")}> //! aqui
  Products
</CustomButton>

// igual en la pantalla de produicto productCard
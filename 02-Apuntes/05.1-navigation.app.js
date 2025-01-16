
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

//! OCULTAR HEADER TABS
// en /app/tabs/_layout
// en <Tabs Screenoptions={{ headerShown: false}}


//! DRAWERS
//? https://docs.expo.dev/router/advanced/drawer/
// Es un elemento que se ncuntre a anivel grlobal de la aplicación
// con un menú de burger en la esquina superior

// es una dependencia que no viene con Expo, por lo que tenemos que instalarla a parte
//? npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated

// la manera de confirarlo es parecido a Stack o los Tabs
// tenemos que envolver en /app/_layout nuestro Slot

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}

// en /app/index.tsx  hacemos el <Redirect href="/drawer"
// creamos la carpeta /app/drawe/_layout.tsx rnfe DrawerLayout solo para ver que se rendiriza

// creamos las carpetas (labels) que va a tener nuestro menu lateral
// /drawer/schedule/index.tsx y /drawer/user/index.tsx y 

// en /app/drawer/_layout
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'user',
          title: 'User',
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'schedule',
          title: 'Schedule',
        }}
      />
    </Drawer>
  );
}



//! PERSONALIZAR EL DRAWER
// tenemos posibilidades de personalizar el drawer para que se vea más natural
// o acorde con nuestra guía de estilo

<Drawer
  drawerContent={CustomDrawer}
  screenOptions={{
    // headerShown: false,
    overlayColor: 'rgba(0,0,0,0.4)',
    drawerActiveTintColor: 'indigo',
    headerShadowVisible: false,
    sceneContainerStyle: {
      backgroundColor: 'white',
    },
  }}
></Drawer>

{/* <Drawer.Screen
  name="(tabs)" // This is the name of the page and must match the url from root
  options={{
    headerShown: false,
    drawerLabel: 'Tabs + Stack',
    title: 'Tabs + Stack',

    drawerIcon: ({ color, size }) => (
      <Ionicons name="albums-outline" size={size} color={color} />
    ),
  }}
/> */}


//! DRAWER CONTENT



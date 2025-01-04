import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
  screenOptions={{
    // headerShown: false,
    overlayColor: 'rgba(0,0,0,0.4)',
    drawerActiveTintColor: 'indigo',
    headerShadowVisible: false,

  }}
>
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'user',
          title: 'User',

          drawerIcon:({color, size}) =>(
            <Ionicons name="person-circle-outline" color={color} size={size} />
          )
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
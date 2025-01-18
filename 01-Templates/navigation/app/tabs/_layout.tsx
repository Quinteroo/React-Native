import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Ionicons} from "@expo/vector-icons";
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'green', headerShown:false }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'stack',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'favorites',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
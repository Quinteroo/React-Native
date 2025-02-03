import { View, Text, Pressable } from 'react-native'
import React from 'react'
import ThemedText from '@/components/ThemedText'
import {Ionicons} from "@expo/vector-icons";
import { Href, router } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';



interface Props {
  title:string,
  icon: keyof typeof Ionicons.glyphMap,
  name: string,
  link:string,
}

const MenuItem = ({title, icon,name,link}:Props) => {
  const backgroundColor = useThemeColor({light: "white", dark: "rgba(0, 0, 0, 0.25)"},'background')
  const primaryColor = useThemeColor({}, "primary")

  return (
    <Pressable
    style={{
      backgroundColor: backgroundColor,
      marginLeft: 10,
      marginRight: 10,
      padding:10,
      display: "flex",
      flexDirection: "row",
      alignItems:"center"    }}
    onPress={()=> router.push(link as Href)}
    >
      <Ionicons name={icon} size={30} color={primaryColor}/>
      
      <ThemedText bold>
        {title}
      </ThemedText>
    </Pressable>
  )
}

export default MenuItem
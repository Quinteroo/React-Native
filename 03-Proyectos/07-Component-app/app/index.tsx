import React from 'react'

import ThemedView from '@/components/ThemedView'
import MenuItem from '@/components/menu/MenuItem/MenuItem'
import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import ThemedText from '@/components/ThemedText'
import { View } from 'react-native'



const index = () => {
  return (
    <ThemedView>
      <ThemedText bold style={{fontSize:25, marginBottom:15}}>Components App</ThemedText>

      
      {animationMenuRoutes.map((route)=>(
        <MenuItem 
          key={route.title}
          name={route.name}
          link={route.link}
          icon={route.icon} 
          title={route.title}        
          />        
      ))}
      <View style={{marginBottom:10}}/>
      
      {uiMenuRoutes.map((route)=>(
        <MenuItem 
          key={route.title}
          name={route.name}
          link={route.link}
          icon={route.icon} 
          title={route.title}        
          />        
      ))}

      <View style={{marginBottom:10}}/>

      {menuRoutes.map((route)=>(
        <MenuItem 
          key={route.title}
          name={route.name}
          link={route.link}
          icon={route.icon} 
          title={route.title}        
          />        
      ))}



    </ThemedView>

  )
}

export default index


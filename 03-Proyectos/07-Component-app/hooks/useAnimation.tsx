import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native'




export const useAnimation = () => {

  const animatedOpacity = useRef(new Animated.Value(0)).current
  const animatedTop = useRef(new Animated.Value(-100)).current
  
  const fadeIn = ()=>{    
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()

    Animated.timing(animatedTop,{
      toValue:0,
      duration: 700,
      useNativeDriver: true, 
      easing: Easing.elastic(3) 
    }).start()


  }

  const fadeOut = () =>{
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true, 
    }).start(()=>animatedTop.resetAnimation()) 
    

  }



  return {
    animatedOpacity,
    animatedTop,

    //Methods
    fadeIn,
    fadeOut
  }
}

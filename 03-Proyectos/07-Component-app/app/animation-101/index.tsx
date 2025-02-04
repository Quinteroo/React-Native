import { useRef } from 'react';
import ThemedButton from '@/components/ThemedButton';
import { View, Animated, Easing } from 'react-native';
import { useAnimation } from '@/hooks/useAnimation';


const Animation101Screen = () => {
  const { animatedOpacity,animatedTop,fadeIn,fadeOut} = useAnimation()

  return (
    <View style={{
      flex:1,
      display: "flex",
      justifyContent:"center",
      alignItems:"center",
      gap:25
      }}>

      <Animated.View
      className='bg-dark-secondary rounded-xl'
      style={{
        width: 150,
        height: 150,
        opacity: animatedOpacity,  
        transform: [{
          translateY: animatedTop
        }]
      }} 
      />

      <ThemedButton style={{borderWidth: 4, borderColor:"orange"}} onPress={()=>fadeIn()}>Fade In</ThemedButton>
      <ThemedButton onPress={()=>fadeOut()}>Fade out</ThemedButton>
    </View>
  );
};
export default Animation101Screen;
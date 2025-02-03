import { useRef } from 'react';
import ThemedButton from '@/components/ThemedButton';
import { View, Animated } from 'react-native'; //!


const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current //! 1
  
  const fadeIn = ()=>{    //! 2
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = () =>{
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()

  }

  return (
    <View style={{
      flex:1,
      display: "flex",
      justifyContent:"center",
      alignItems:"center",
      gap:25
      }}>

      <Animated.View //! 3
      className='bg-dark-secondary rounded-xl'
      style={{
        width: 150,
        height: 150,
        opacity: animatedOpacity  //! 4
      }} 
      />

      <ThemedButton style={{borderWidth: 4, borderColor:"orange"}} onPress={()=>fadeIn()}>Fade In</ThemedButton>
      <ThemedButton onPress={()=>fadeOut()}>Fade out</ThemedButton>
    </View>
  );
};
export default Animation101Screen;

//!  1 creamos el valor inicial, en este caso 0
//!  2 creamos la función que va a moficar ese valor.  el .start() ejecuta la función
//!  3 para que View acepte el valor que hemos creado, tenemos que cambiarlo por un Animated.View
//!  4 añadimos el valor de referencia a la opacidad

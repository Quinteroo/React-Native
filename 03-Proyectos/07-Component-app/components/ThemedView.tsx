

import { View, ViewProps } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props extends ViewProps{ //! A
  className?: string,
  margin?: boolean,
  safe?: boolean
}


const ThemedView = ({ //! A >> añadimos las propiedades de los View este componente, lo que permite poder recibirlas
  style, 
  className,
  safe = false,
  children,
}:Props) => {

  const backgroundColor = useThemeColor({}, 'background') //* B
  // const backgroundColor = useThemeColor({light:"red", dark:"indigo"}, 'background') <<< esta forma si queremos sobreescribir algun color sobre los predefinidos
  const safeArea = useSafeAreaInsets() //? C

  return (
    <View style={[
      {
        backgroundColor: backgroundColor, //* B >> empleamos el hook que nos facilita EXPO para ajustar el tema de la app a las preferemcias del sistema
        flex:1,
        paddingTop: safe ? safeArea.top : 0 //?C >> si lo mandamos como props, nos permite darte un margin superior respetando el hueco de la cámara
      },
      style  //! en el caso que nos manden estilos los sobreescribimos
      ]}>
      {children}
    </View>
  )
}

export default ThemedView
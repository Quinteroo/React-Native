import { View, Text } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context"

const homeScreen = () => {

  const safeArea = useSafeAreaInsets()  //!


  return (
    <View style={{paddingTop: safeArea.top}}>
      <Text>homeScreen</Text>
    </View>
  )
}

export default homeScreen

//! useSafeAreaInsets es un hook que nos permite aplicarlo en los componentes
//! y que adapta el padding top en función del diseño del dispotivo
//! por ejemplo si tiene cámara de fotos o un statusBar
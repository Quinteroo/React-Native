

//? https://docs.expo.dev/versions/latest/sdk/linear-gradient/

import {LinearGradient} from "expo-linear-gradient",

const {height} = useWindowDimensions()  // esta es la altura de la pantalla


<LinearGradient 
  colors={["rgba(0,0,0,0.3)","transparent"]}
  start={[0,0]}
  style={{
    height: height * 0.4, // ocupa un 40% de la altura de la pantalla
    position: "absolute",
    zIndex: 1,
    width: "100%"
  }}
/>



import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const GlobalStyles = StyleSheet.create({
  background:{
    backgroundColor : Colors.background,
    flex: 1,
    justifyContent: "flex-end"
  },
  calculatorContainer : {

  },
  mainResult:{
    fontSize:50, 
    fontFamily:"SpaceMono", 
    color: "white",
    textAlign: "right"

  },
  subResult:{
    fontSize:25, 
    fontFamily:"SpaceMono", 
    color: Colors.lightGray,
    textAlign: "right",
    marginTop: 10
  
  }
})
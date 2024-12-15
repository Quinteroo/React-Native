import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import FloatingButton from './components/FloatingButton/FloatingButton.js';




export default function App() {

  const [count, setCount]= useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      <StatusBar style="auto" />
      <FloatingButton label="+1"
      onPress={()=>setCount(count+1)} 
      onLongPress={()=>setCount(0)} 
      position="right"
      />

      <FloatingButton label="reset" onPress={()=>setCount(0)} position='left'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge:{
    fontSize: 100,
    fontWeight:"600",
  },
});

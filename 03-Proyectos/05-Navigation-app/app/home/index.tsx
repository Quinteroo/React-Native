import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <SafeAreaView>
    <View>
      <Text style={{color:"black"}}>Home</Text>
      <Link href="/products">Products</Link>
      <Link href="/profile">profile</Link>
    </View>
    </SafeAreaView>

  )
}

export default Home
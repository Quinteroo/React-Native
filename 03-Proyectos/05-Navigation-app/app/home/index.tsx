import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/CustomButton/CustomButton'

const Home = () => {

  return (
    <SafeAreaView>
    <View style={{padding:10}}>
      <Text style={{color:"black"}}>Home</Text>

      <CustomButton color="primary" onPress={()=> router.push("/products")}>
        Productos
      </CustomButton>


      <Link href="/profile" asChild>
      <CustomButton color="secondary">Profile</CustomButton>
      </Link>




      {/* <Link href="/products">Products</Link>
      <Link href="/profile">profile</Link> */}
    </View>
    </SafeAreaView>

  )
}

export default Home
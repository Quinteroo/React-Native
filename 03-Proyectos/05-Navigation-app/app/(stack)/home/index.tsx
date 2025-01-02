import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import CustomButton from '@/components/CustomButton/CustomButton';

const Home = () => {

  return (
    <SafeAreaView>
    <View style={{padding:10}}>
      <Text style={{color:"black"}}>Home</Text>

      <CustomButton color="primary" onPress={()=> router.push("/products")}>
        Products
      </CustomButton>

      <CustomButton color="secondary" onPress={()=> router.push("/profile")}>
        Profile
      </CustomButton>


      {/* <Link href="/profile" asChild>
      <CustomButton color="secondary">Profile</CustomButton>
      </Link> */}

    </View>
    </SafeAreaView>

  )
}

export default Home
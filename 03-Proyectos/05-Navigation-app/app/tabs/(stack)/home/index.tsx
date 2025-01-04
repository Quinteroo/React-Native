import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import CustomButton from '@/components/CustomButton/CustomButton';

const Home = () => {

  return (
    <SafeAreaView>
    <View style={{padding:10}}>

      <CustomButton color="primary" onPress={()=> router.push("/tabs/(stack)/products")}>
        Products
      </CustomButton>

      <CustomButton color="secondary" onPress={()=> router.push("/tabs/(stack)/profile")}>
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
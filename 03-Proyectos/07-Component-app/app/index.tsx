

import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>Components App</Text>
      <Link href={"./animation-101"}>Animation 101</Link>
      <Link href={"./animation-102"}>Animation 102</Link>
    </View>
  )
}

export default index
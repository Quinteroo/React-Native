import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { products } from '@/store/product.list'

const ProductCard = () => {

  const {id} = useLocalSearchParams()

  const product = products.find((p)=> p.id === id)

  if(!product){
    return <Redirect href="/" />
  }


  return (
          <View className='m-10 gap-1'>
            <Text className='text-2xl font-work-black'>{product.title}</Text>
            <Text className=''>{product.description}</Text>
            <Text className='text-3xl font-work-medium'>{product.price}</Text>
          </View>
  )
}

export default ProductCard
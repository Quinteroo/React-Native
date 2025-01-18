import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '@/store/product.list'

const ProductCard = () => {

  const {id} = useLocalSearchParams()
  const navigation = useNavigation()

  const product = products.find((p)=> p.id === id)

  useEffect(()=>{
    navigation.setOptions({
      title: product?.title ?? "producto"
    });

  },[product])

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
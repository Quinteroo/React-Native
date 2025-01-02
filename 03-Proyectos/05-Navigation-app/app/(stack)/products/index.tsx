import { View, Text, FlatList } from 'react-native'
import React from 'react';
import { products } from '@/store/product.list';
import { Link } from 'expo-router';

const Products = () => {
  return (
    <View className="flex-1">
      <FlatList className='flex flex-1 p-3' //! Para que <FlatList> con flex-1 funcione, el contenedor <View> que lo envuelve debe tener una altura definida o también usar flex: 1.
        data={products}
        keyExtractor={(item) => item.id} //! tiene que ser string, si en el data el id es un nº, tenemos que hacer un .toString()
        renderItem={({item}) => (
          <View className='mt-10'>
            <Text className='text-2xl font-work-black'>{item.title}</Text>
            <Text className=''>{item.description}</Text>
            <Link className="text-primary" href={`/(stack)/products/${item.id}`}
            >
                ver detalles
            </Link>
          </View>
        )}

      />
    </View>
  )
}

export default Products
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window'); // Obtiene el ancho de la pantalla

const data = [
  { id: '1', title: 'Primera Imagen', image: 'https://i.pinimg.com/236x/a2/e9/70/a2e97087637b3b74ec16812e8480f5b3.jpg' },
  { id: '2', title: 'Segunda Imagen', image: 'https://i.pinimg.com/236x/46/b0/cb/46b0cbd434a32ed8e692e4f9d025839a.jpg' },
  { id: '3', title: 'Tercera Imagen', image: 'https://i.pinimg.com/236x/4a/a5/8c/4aa58c2e240b1d597266dc1497ce8b0b.jpg' },
];

const MyCarousel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        width={width} // El ancho del carrusel es el ancho de la pantalla
        height={300} // Altura del carrusel
        data={data} // Datos del carrusel
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        loop={true} // Hace que el carrusel sea infinito
        autoPlay={true} // Desactiva el modo automático
        scrollAnimationDuration={1000} // Duración de la animación de desplazamiento

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    marginTop: 10,
    overflow: "hidden"

  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default MyCarousel;

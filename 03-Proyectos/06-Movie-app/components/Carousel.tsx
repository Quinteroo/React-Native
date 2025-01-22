import { View, Text, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';



import { MovieDBresponse, Result } from '@/api/movie-db.response'

interface MoviesCarouselProps {
  movies: MovieDBresponse    //!!!
}


const MoviesCarousel = ({movies}:MoviesCarouselProps) => {
  const ref = useRef<ICarouselInstance>(null)

  //const width = Dimensions.get('window').width; //* 
  const width = useWindowDimensions().width //? 
  return (
    <View style={{height: 250, width: "auto"}}>

      <Carousel 
      ref={ref}
      data={movies.results} //? Acceso a las películas  >> espera un Array
      width={200} // este es el grosor de las tarjetas
      height={350}
      style={{
        width: width,
        height: 350,
        justifyContent: "center",
        alignItems: "center",
      }}

      renderItem={({item}:{item:Result}) =>( //! tipado de rederItem
        <Text style={{fontSize:20}}>
          {item.title}
        </Text>
      )}
      />
    </View>
  )
}

export default MoviesCarousel


//!!!  Para asegurar que la prop movies que recibe el componente MoviesCarousel tenga la estructura 
//!!! definida por la interfaz MovieDBresponse, debemos tipar la prop explícitamente en el 
//!!! componente.

//!!! Hemos creado una interfaz MoviesCarouselProps que asegura que la prop movies tenga el tipo MovieDBresponse.

//* este sería el ancho de la pantalla, PERO si empleamos este, al girar el dispositico las dimensiones no cambian, 
//* se puede dejar si asumimos que la aplicación siempre va a ser portrait o landscape

//? de esta manera siempre respeta el ancho del dispositivo, cambiando el width

//? Acceso a las películas >> Cambiamos data={movies} a data={movies.results}, porque Carousel espera un array, y results contiene la lista de películas.

//todo este es el modo en el que se mueven las tarjetas, hay variantes en la doc

//! tipado de renderItem >> Usamos la interfaz Result para tipar los elementos individuales del array. Esto asegura que item.title sea reconocido como válido por TypeScript


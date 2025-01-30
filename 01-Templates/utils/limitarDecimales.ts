



// Para redondear el valor de movie.vote_average y mostrar solo un decimal (por ejemplo, 
// de 6.6785 a 6.6), puedes usar el método toFixed(). Este método te permite limitar 
// la cantidad de decimales a mostrar.

<Text style={{ fontSize: 25 }}>
  {movie?.vote_average.toFixed(1)}
</Text>

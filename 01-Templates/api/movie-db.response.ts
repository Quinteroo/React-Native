
// si hacemos una llamada get y copiamos todos los datos en JSON que hemos recibido
// en la barra buscadora de vsCode ponemos //* >paste JSON as code
// enter
// ponemos el nombre de la interfaz que queramos  //* MovieDBrepsonse
// enter



export interface MovieDBresponse {
  dates:         Dates;
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface Result { //!
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}


//! de esta manera tipamos los datos que recibimos de la llamada http
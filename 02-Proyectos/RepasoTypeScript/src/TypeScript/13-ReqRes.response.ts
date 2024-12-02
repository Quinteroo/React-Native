export interface ReqResUserList {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        User[]; //Datum[] te viene por defecto, pero si pinchamos sobre Datum, function F2 nos da la opción de cambiarlo a User:[]
  support:     Support;
}

export interface User {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}

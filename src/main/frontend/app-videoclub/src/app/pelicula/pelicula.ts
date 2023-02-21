import {Categoria} from "../categoria/categoria";

export interface Pelicula {

  id: number;
  titulo: string;
  descripcion: string;
  anyoLanzamiento: string;
  idioma: Idioma;
  idiomaOriginal: Idioma;
  duracionAlquiler: number;
  rentalRate: number;
  duracion: number;
  replacementCost: number;
  clasificacion: string;
  caracteristicasEspeciales: string;
  categorias: Categoria[];
  ultimaActualizacion: string;

}

export interface Idioma {

  id: number;
  nombre: string;
  ultimaActualizacion: string;
  peliculasIdioma: Pelicula[];
  peliculasIdiomaOriginal: Pelicula[];

}

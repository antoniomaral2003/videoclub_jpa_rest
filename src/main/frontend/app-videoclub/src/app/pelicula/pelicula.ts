import {Categoria} from "../categoria/categoria";

export interface Pelicula {

  id: number;
  titulo: string;
  descripcion: string;
  anyoLanzamiento: Date;
  idioma: Idioma;
  idiomaOriginal: Idioma;
  duracionAlquiler: number;
  rentalRate: number;
  duracion: number;
  replacementCost: number;
  clasificacion: string;
  caracteristicasEspeciales: string;
  categorias: Categoria[];
  ultimaActualizacion: Date;

}

export interface Idioma {

  id: number;
  nombre: string;
  ultimaActualizacion: Date;
  peliculasIdioma: Pelicula[];
  peliculasIdiomaOriginal: Pelicula[];

}

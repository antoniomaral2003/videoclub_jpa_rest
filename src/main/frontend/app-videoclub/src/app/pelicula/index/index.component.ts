import { Component, OnInit } from '@angular/core';
import { Pelicula } from "../pelicula";
import { PeliculaService } from "../pelicula.service";
import {Categoria} from "../../categoria/categoria";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculaService) { }

  ngOnInit(): void {

    this.peliculasService.getAll().subscribe((data: Pelicula[]) => {

      this.peliculas= data;
      console.log(this.peliculas);

    })

  }

  deletePelicula(id: any) {

    this.peliculasService.delete(id).subscribe(res => {

      this.peliculas = this.peliculas.filter(cat => cat.id !== id)
      console.log('Pelicula id =' + id + ' eliminada satisfactoriamente!');

    })

  }

}

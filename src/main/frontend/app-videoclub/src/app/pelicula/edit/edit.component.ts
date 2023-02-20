import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { PeliculaService } from "../pelicula.service";
import {ActivatedRoute, IsActiveMatchOptions, Router} from "@angular/router";
import {Idioma, Pelicula} from "../pelicula";
import {Categoria} from "../../categoria/categoria";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit {

  id: number = 0;

  idioma: Idioma = {id: 0, nombre: "español", peliculasIdioma: [], peliculasIdiomaOriginal: [], ultimaActualizacion: "1970-01-01"};
  idiomaOriginal: Idioma = {id: 0, nombre: "ingles", peliculasIdioma: [], peliculasIdiomaOriginal: [], ultimaActualizacion: "1970-01-01"};

  pelicula: Pelicula = {
  id: 0,
  titulo: "VOID",
  descripcion: "VOID VOID VOID",
  anyoLanzamiento: "1970-01-01",
  idioma: this.idioma,
  idiomaOriginal: this.idiomaOriginal,
  duracionAlquiler: 120,
  rentalRate: 25.99,
  duracion: 120,
  replacementCost: 3.99,
  clasificacion: "+16",
  caracteristicasEspeciales: "VOID VOID",
  categorias: [],
  ultimaActualizacion: "1970-01-01"
};

  constructor(private peliculasService: PeliculaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['idPelicula'];
    this.peliculasService.find(this.id).subscribe((data: Pelicula)=>{
      this.pelicula = data;

      this.form.get('titulo')?.setValue(this.pelicula.titulo);
      this.form.get('descripcion')?.setValue(this.pelicula.descripcion);
      this.form.get('anyoLanzamiento')?.setValue(this.pelicula.anyoLanzamiento);
      this.form.get('idioma')?.setValue(this.pelicula.idioma);
      this.form.get('idiomaOriginal')?.setValue(this.pelicula.idiomaOriginal);
      this.form.get('duracionAlquiler')?.setValue(this.pelicula.duracionAlquiler);
      this.form.get('rentalRate')?.setValue(this.pelicula.rentalRate);
      this.form.get('duracion')?.setValue(this.pelicula.duracion);
      this.form.get('replacementCost')?.setValue(this.pelicula.replacementCost);
      this.form.get('caracteristicasEspeciales')?.setValue(this.pelicula.caracteristicasEspeciales);
      this.form.get('categorias')?.setValue(this.pelicula.categorias);

    });

  }

  get f(){
    return this.form.controls;
  }

  submit() {

    console.log(this.form.value);

    this.peliculasService.update(this.id, this.form.value).subscribe(res => {

      console.log('Pelicula actualizada satisfactoriamente!');
      this.router.navigateByUrl('pelicula/index').then();

    })

  }

}

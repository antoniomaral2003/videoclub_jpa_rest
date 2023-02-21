import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { PeliculaService } from "../pelicula.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Idioma, Pelicula} from "../pelicula";
import {Categoria} from "../../categoria/categoria";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements  OnInit {

  id: number = 0;

  idioma: Idioma = {id: 1, nombre: "español", peliculasIdioma: [], peliculasIdiomaOriginal: [], ultimaActualizacion: "1970-01-01"};

  ididomaOriginal: Idioma = {id: 0, nombre: "ingles", peliculasIdioma: [], peliculasIdiomaOriginal: [], ultimaActualizacion: "1970-01-01"};

  pelicula: Pelicula = {
    id: 0,
    titulo: "VOID",
    descripcion: "VOID VOID VOID",
    anyoLanzamiento: "1970-01-01",
    idioma: this.idioma;
    idiomaOriginal: this.ididomaOriginal;
    duracionAlquiler: 120,
    rentalRate: 25.99,
    duracion: 120,
    replacementCost: 3.99,
    clasificacion: "+16",
    caracteristicasEspeciales: "VOID VOID",
    categorias: [],
    ultimaActualizacion: "1970-01-01"
  };

  form: FormGroup =   new FormGroup({
    pelicula:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
  });

  constructor(private peliculaService: PeliculaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['idPelicula'];

    this.peliculaService.find(this.id).subscribe((data: Pelicula)=>{

      this.pelicula = data;
      this.form.get('titulo')?.setValue(this.pelicula.titulo);

    });

  }

  get f(){
    return this.form.controls;
  }

  submit() {

    console.log(this.form.value);

    this.peliculaService.update(this.id, this.form.value).subscribe(res => {

      console.log('Pelicula actualizada satisfactoriamente!');
      this.router.navigateByUrl('pelicula/index').then();

    })

  }

}

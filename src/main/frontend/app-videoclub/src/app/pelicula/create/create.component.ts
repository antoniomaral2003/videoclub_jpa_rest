import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { PeliculaService } from "../pelicula.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent implements OnInit {

  form: FormGroup =  new FormGroup({
    nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
  });

  constructor(private peliculasService: PeliculaService, private router: Router) { }

  ngOnInit(): void {



  }

  get f() {

    return this.form.controls;

  }

  submit() {

    console.log(this.form.value);

    this.peliculasService.create(this.form.value).subscribe(res => {

      console.log('Categoría creada correctamente! + res');
      this.router.navigateByUrl('categoria/index').then();

    })

  }

}

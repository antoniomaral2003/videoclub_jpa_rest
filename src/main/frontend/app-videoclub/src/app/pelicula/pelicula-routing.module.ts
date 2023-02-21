import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "../categoria/index/index.component";
import {CreateComponent} from "../categoria/create/create.component";
import {EditComponent} from "../categoria/edit/edit.component";

const routes: Routes = [
  { path: 'pelicula', redirectTo: 'person/index', pathMatch: 'full'},
  { path: 'pelicula/index', component: IndexComponent },
  { path: 'pelicula/create', component: CreateComponent },
  { path: 'pelicula/edit/:idPelicula', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaRoutingModule { }

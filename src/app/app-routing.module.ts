import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes

//Modules
// import { VereficacionModule } from './modules/vereficacion/vereficacion.module';

const routes: Routes = [
  {
    path: 'verificacion' , loadChildren: 'vereficacion.module#VereficacionModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


const materialComponents = [
  MatToolbarModule,
];


@NgModule({
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }

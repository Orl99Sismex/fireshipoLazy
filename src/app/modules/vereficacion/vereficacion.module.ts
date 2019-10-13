import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeriOneComponent } from './veri-one/veri-one.component';
import { VerTwoComponent } from './ver-two/ver-two.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [VeriOneComponent, VerTwoComponent, MainComponent],
  imports: [
    CommonModule
  ]
})
export class VereficacionModule { }

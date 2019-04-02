import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { PropiedadesRecientesComponent } from './components/propiedades-recientes/propiedades-recientes.component';

@NgModule({
  declarations: [
    HomeComponent,
    PropiedadesRecientesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { ExplorarZonaComponent } from './components/explorar-zona/explorar-zona.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PropiedadesRecientesComponent } from './components/propiedades-recientes/propiedades-recientes.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { RequestDateComponent } from './components/request-date/request-date.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FAwesomeModule } from '../fAwesome.module';


@NgModule({
  declarations: [
    NopagefoundComponent,
    PublicarComponent,
    ExplorarZonaComponent,
    FooterComponent,
    CarouselComponent,
    PropiedadesRecientesComponent,
    InProgressComponent,
    RequestDateComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FAwesomeModule
  ],
  exports: [
    NopagefoundComponent,
    PublicarComponent,
    ExplorarZonaComponent,
    FooterComponent,
    CarouselComponent,
    PropiedadesRecientesComponent,
    InProgressComponent,
    RequestDateComponent,
    NavbarComponent,
    LoginComponent
  ],
  entryComponents: [
    LoginComponent,
    // RegisterComponent,
    // PdfViewerComponent,
    // RegisterPropertyComponent,
    // ShowRequirementsComponent
  ]
})
export class SharedModule { }

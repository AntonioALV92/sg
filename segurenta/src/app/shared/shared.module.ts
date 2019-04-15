import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import {AgmCoreModule} from '@agm/core';

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
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterPropertyComponent } from './components/register-property/register-property.component';
import { UploadImageComponent } from './components/register-property/upload-image/upload-image.component';
import { UploadVideoComponent } from './components/register-property/upload-video/upload-video.component';
import { MapComponent } from './components/register-property/map/map.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';

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
    LoginComponent,
    PropertyDetailComponent,
    RegisterComponent,
    RegisterPropertyComponent,
    UploadImageComponent,
    UploadVideoComponent,
    MapComponent,
    PdfViewerComponent,
    PasswordRecoveryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FAwesomeModule,
    PdfViewerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8PiES1ULHvO4eRUG7dJYfu5QeLtz1Qas'
    })
  ],
  exports: [
    NopagefoundComponent,
    PublicarComponent,
    ExplorarZonaComponent,
    FooterComponent,
    CarouselComponent,
    PropiedadesRecientesComponent,
    InProgressComponent,
    RegisterPropertyComponent,
    MapComponent,
    RequestDateComponent,
    NavbarComponent,
    LoginComponent,
    PropertyDetailComponent,
    RegisterComponent,
    PasswordRecoveryComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    PdfViewerComponent,
    PasswordRecoveryComponent
    // RegisterPropertyComponent,
    // ShowRequirementsComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
// import flatpickr from 'flatpickr';
// import espanol from 'flatpickr/dist/l10n/es';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { CalendarComponent } from './components/scheduler/calendar/calendar.component';
import { FormEventComponent } from './components/scheduler/form-event/form-event.component';
import { WeekComponent } from './components/scheduler/week/week.component';


// flatpickr.localize(espanol);

registerLocaleData(localeEsMx);
// Files
import { ngfModule, ngf } from 'angular-file';



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
    PasswordRecoveryComponent,
    EditUserComponent,
    SchedulerComponent,
    CalendarComponent,
    FormEventComponent,
    WeekComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FAwesomeModule,
    PdfViewerModule,
    NgbModule,
    FlatpickrModule.forRoot(),
    ngfModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8PiES1ULHvO4eRUG7dJYfu5QeLtz1Qas'
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
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
    UploadImageComponent,
    UploadVideoComponent,
    MapComponent,
    RequestDateComponent,
    NavbarComponent,
    LoginComponent,
    PropertyDetailComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    EditUserComponent,
    SchedulerComponent,
    CalendarComponent,
    FormEventComponent,
    WeekComponent
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    PdfViewerComponent,
    EditUserComponent,
    PasswordRecoveryComponent
    // RegisterPropertyComponent,
    // ShowRequirementsComponent
  ]
})
export class SharedModule { }

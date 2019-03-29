import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import routes
import { APP_ROUTING } from './app.routes';

// Imports angular-material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { HttpClientModule } from '@angular/common/http';

// Imports Font Awesome
import { FAwesomeModule } from './fAwesome.module';

// Imports components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeAdviserComponent } from './components/home-adviser/home-adviser.component';
import { RegisterPropertyComponent } from './components/register-property/register-property.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { HomeRentComponent } from './components/home-rent/home-rent.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { MapComponent } from './components/map/map.component';
import { UpdateRenterComponent } from './components/update-renter/update-renter.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports services
import { AuthService } from './services/auth.service';
import { PersonRegisterService } from './services/person-register.service';
import { MiddlewareService } from './services/middleware/middleware.service';
import { CatalogosService } from './services/catalogos/catalogos.service';
import { ConfigurationService } from './services/configuration/configuration.service'

// Files
import { ngfModule, ngf } from 'angular-file';

// Maps
import { AgmCoreModule } from '@agm/core';
import { UpdatePropertyComponent } from './components/update-property/update-property.component';
import { RenterProfilerComponent } from './components/renter-profiler/renter-profiler.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ShowRequirementsComponent } from './components/show-requirements/show-requirements.component';

// Video
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    PdfViewerComponent,
    FooterComponent,
    HomeAdviserComponent,
    HomeRentComponent,
    RegisterPropertyComponent,
    UploadImageComponent,
    UploadVideoComponent,
    PropertyDetailComponent,
    MapComponent,
    UpdateRenterComponent,
    UpdatePropertyComponent,
    RenterProfilerComponent,
    LoadingComponent,
    ShowRequirementsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FAwesomeModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
    ngfModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3frb1yu2iHSbY-RnHgL-vjvqquWLvXxY'
    })
  ],
  providers: [
    AuthService,
    PersonRegisterService,
    MiddlewareService,
    CatalogosService,
    ConfigurationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    PdfViewerComponent,
    RegisterPropertyComponent,
    ShowRequirementsComponent
  ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import routes
import { APP_ROUTES } from './app.routes';
// import { HOMEADVISER_ROUTES } from './home-adviser/home-adviser.routes';

// Imports Modulos
import { HomeModule } from './home/home.module';
import { HomeAdviserModule } from './home-adviser/home-adviser.module';
import { HomeRentModule } from './home-rent/home-rent.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { FAwesomeModule } from './fAwesome.module';

// Imports Font Awesome

// Imports components
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports services
import { MiddlewareService } from './services/middleware/middleware.service';
import { CatalogosService } from './services/catalogos/catalogos.service';
import { BannerService } from './services/banner/banner.service';
import { ConfigurationService } from './services/configuration/configuration.service';
import { SessionService } from './services/session/session.service';
import { AlertsService } from './services/alerts/alerts.service';
import { RegistroService } from './services/registro/registro.service';
import { SessionGuardGuard } from './services/guards/session-guard.guard';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';

// Files
import { ngfModule } from 'angular-file';

// Video
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    // HOMEADVISER_ROUTES,
    FormsModule,
    SharedModule,
    HomeModule,
    MaterialModule,
    HomeAdviserModule,
    HomeRentModule,
    HttpClientModule,
    ReactiveFormsModule,
    PdfViewerModule,
    FAwesomeModule,
    ngfModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [
    MiddlewareService,
    CatalogosService,
    ConfigurationService,
    SessionService,
    BannerService,
    AlertsService,
    RegistroService,
    SessionGuardGuard,
    AuthGuardGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }

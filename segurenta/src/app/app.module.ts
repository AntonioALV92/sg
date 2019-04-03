import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import routes
import { APP_ROUTES } from './app.routes';

// Imports Modulos
import { HomeModule } from './home/home.module';
import { HomeAdviserModule } from './home-adviser/home-adviser.module';
import { HomeRentModule } from './home-rent/home-rent.module';
import { SharedModule } from './shared/shared.module';

// Imports Font Awesome

// Imports components
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports services
import { MiddlewareService } from './services/middleware/middleware.service';
import { CatalogosService } from './services/catalogos/catalogos.service';
import { ConfigurationService } from './services/configuration/configuration.service'

// Files
import { ngfModule } from 'angular-file';

// Maps
import { AgmCoreModule } from '@agm/core';

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
    FormsModule,
    SharedModule,
    HomeModule,
    HomeAdviserModule,
    HomeRentModule,
    HttpClientModule,
    ReactiveFormsModule,
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
    MiddlewareService,
    CatalogosService,
    ConfigurationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }

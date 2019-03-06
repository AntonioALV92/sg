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
import { HomeBrokerComponent } from './components/home-broker/home-broker.component';
import { RegisterPropertyComponent } from './components/register-property/register-property.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { HomeRentComponent } from './components/home-rent/home-rent.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// Imports services
import { AuthService } from './services/auth.service';
import { PersonRegisterService } from './services/person-register.service';




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
    HomeBrokerComponent,
    HomeRentComponent,
    RegisterPropertyComponent,
    UploadImageComponent
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
    PdfViewerModule
  ],
  providers: [
    AuthService,
    PersonRegisterService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
    PdfViewerComponent,
    RegisterPropertyComponent
  ]
})
export class AppModule { }

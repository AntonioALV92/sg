
import { RouterModule, Routes, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
// import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
// import { RegisterComponent } from './components/register/register.component';
import { HomeAdviserComponent } from './components/home-adviser/home-adviser.component';
import { HomeRentComponent } from './components/home-rent/home-rent.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { UpdateRenterComponent } from './components/update-renter/update-renter.component';
import { UpdatePropertyComponent } from './components/update-property/update-property.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'property-detail', component: PropertyDetailComponent},
    // { path: 'password-recovery', component: PasswordRecoveryComponent},
    { path: 'home-adviser', component: HomeAdviserComponent },
    { path: 'home-rent', component: HomeRentComponent },
    { path: 'update-renter', component: UpdateRenterComponent },
    { path: 'update-property', component: UpdatePropertyComponent },
    // {path: 'register', component: RegisterComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home-rent' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

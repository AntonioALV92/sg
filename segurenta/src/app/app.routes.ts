
import { RouterModule, Routes, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
// import { RegisterComponent } from './components/register/register.component';
import { HomeAdviserComponent } from './components/home-adviser/home-adviser.component';
import { HomeRentComponent } from './components/home-rent/home-rent.component';
import { UpdateRenterComponent } from './components/update-renter/update-renter.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    // {path: 'login', component: LoginComponent},
    { path: 'password-recovery', component: PasswordRecoveryComponent},
    { path: 'home-adviser', component: HomeAdviserComponent },
    { path: 'home-rent', component: HomeRentComponent },
    { path: 'update-renter', component: UpdateRenterComponent },
    // {path: 'register', component: RegisterComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

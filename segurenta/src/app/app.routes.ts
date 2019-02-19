
import { RouterModule, Routes, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
// import { RegisterComponent } from './components/register/register.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    // {path: 'login', component: LoginComponent},
    {path: 'password-recovery', component: PasswordRecoveryComponent},
    // {path: 'register', component: RegisterComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

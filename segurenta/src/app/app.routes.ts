
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/components/nopagefound/nopagefound.component';
import { HomeComponent } from './home/home.component';
import { HomeAdviserComponent } from './home-adviser/home-adviser.component';
import { HomeRentComponent } from './home-rent/home-rent.component';
import { PropertyDetailComponent } from './shared/components/property-detail/property-detail.component';
import { RegisterPropertyComponent } from './shared/components/register-property/register-property.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'home-adviser', component: HomeAdviserComponent},
    { path: 'home-adviser/propertyDetail', component: PropertyDetailComponent},
    { path: 'registerProperty', component: RegisterPropertyComponent},
    { path: 'home-rent', component: HomeRentComponent},
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});

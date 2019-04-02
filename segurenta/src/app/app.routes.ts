
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/components/nopagefound/nopagefound.component';
import { HomeComponent } from './home/home.component';
import { HomeAdviserComponent } from './home-adviser/home-adviser.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'home-adviser', component: HomeAdviserComponent},
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});

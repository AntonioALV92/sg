
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/components/nopagefound/nopagefound.component';
import { HomeComponent } from './home/home.component';
import { HomeAdviserComponent } from './home-adviser/home-adviser.component';
import { HomeRentComponent } from './home-rent/home-rent.component';
import { PropertyDetailComponent } from './shared/components/property-detail/property-detail.component';
import { SessionGuardGuard } from './services/guards/session-guard.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'home-adviser', component: HomeAdviserComponent, canActivate: [SessionGuardGuard]},
    { path: 'home-adviser/propertyDetail', component: PropertyDetailComponent, canActivate: [SessionGuardGuard]},
    { path: 'home-rent', component: HomeRentComponent, canActivate: [SessionGuardGuard]},
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});

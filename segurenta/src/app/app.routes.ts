
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/components/nopagefound/nopagefound.component';
import { HomeComponent } from './home/home.component';
import { HomeAdviserComponent } from './home-adviser/home-adviser.component';
import { HomeRentComponent } from './home-rent/home-rent.component';
import { PropertyDetailComponent } from './shared/components/property-detail/property-detail.component';
import { SessionGuardGuard } from './services/guards/session-guard.guard';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';
import { RegisterPropertyComponent } from './shared/components/register-property/register-property.component';
import { SchedulerComponent } from './shared/components/scheduler/scheduler.component';
import { PerfiladorComponent } from './shared/components/perfilador/perfilador.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'home-adviser',
        component: HomeAdviserComponent,
        canActivate: [SessionGuardGuard],
        data: {
            expectedRole: '2'
        }
    },
    {
        path: 'home-adviser/propertyDetail',
        component: PropertyDetailComponent,
        canActivate: [SessionGuardGuard],
        data: {
            expectedRole: '2'
        }
    },
    {
        path: 'home-rent',
        component: HomeRentComponent,
        canActivate: [SessionGuardGuard],
        data: {
            expectedRole: '1'
        }
    },
    { path: 'registerProperty',
        component: RegisterPropertyComponent
    },
    { path: 'citas',
        component: SchedulerComponent
    },
    {
        path: 'perfilador',
        component: PerfiladorComponent
    },
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { LoggedInGuard } from '../login/logged-in.guard';
import { LoggedOutGuard } from '../login/logged-out.guard';
import { StartComponent } from '../start/start.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggedOutGuard]    
    },
    {
        path: 'start',
        component: StartComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { WelcomeComponent } from './../welcome/welcome.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { LoggedInGuard } from '../login/logged-in.guard';
import { LoggedOutGuard } from '../login/logged-out.guard';
import { StartComponent } from '../start/start.component';
import { SettingsComponent } from '../settings/settings.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggedOutGuard]
    },
    {
        path: 'app',
        canActivate: [LoggedInGuard],
        component: StartComponent,
        children: [
            {
                path: '',
                redirectTo: 'start'
            },
            {
                path: 'start',
                component: WelcomeComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: '**',
                redirectTo: '/app',
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

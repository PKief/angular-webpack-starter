import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { LoggedInGuard } from '../login/logged-in.guard';
import { LoggedOutGuard } from '../login/logged-out.guard';
import { StartComponent } from '../start/start.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SettingsComponent } from '../settings/settings.component';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';

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
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'start',
                component: WelcomeComponent
            },
            {
                path: 'about',
                loadChildren: './../about/about.module#AboutModule',
                data: { preload: true },
                // use the following code instead of the webpack module (in webpack 2 you do not need the module anymore!)
                // loadChildren: () => new Promise((resolve)=>(require as any).ensure([], (require: any) => {
                //     resolve(require('./../about/about.module')['AboutModule']);
                // }))
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/pagenotfound'
    },
    {
        path: 'pagenotfound',
        component: PageNotFoundComponent    
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

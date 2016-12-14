import { ModuleWithProviders } from '@angular/core';
import { Routes, Route, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { LoggedInGuard } from '../login/logged-in.guard';
import { LoggedOutGuard } from '../login/logged-out.guard';
import { StartComponent } from '../start/start.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SettingsComponent } from '../settings/settings.component';
import { MessageComponent } from './../message/message.component';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';
import { SettingCategoryComponent } from './../settings/settingCategory.component';
import { SettingsResolver } from './../settings/settings.resolver';

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
                redirectTo: 'welcome'
            },
            {
                path: 'welcome',
                component: WelcomeComponent,
                children: [
                    {
                        path: '',
                        component: MessageComponent,
                    },
                    {
                        path: 'message',
                        component: MessageComponent,
                        outlet: 'popup',
                    },
                    {
                        path: 'message2',
                        component: MessageComponent,
                        outlet: 'popup2',
                    },
                ]
            },
            {
                path: 'settings',
                component: SettingsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'basic',
                    },
                    {
                        path: ':category',
                        component: SettingCategoryComponent,
                        resolve: {
                            settings: SettingsResolver
                        },
                    },
                ]
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

// preloading strategies

// only preload the components which have selected this with 'data: {preload: true}'
export class SelectedPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        // if the route has the attribute 'data' and it is set to true, then make preloading, otherwise lazy loading
        return route.data && route.data['preload'] ? load() : Observable.of(null);
    }
}

// another preloading strategy
export class DelayedPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        // return an observable to inform angular that preload has done its task
        // flatMap triggers the preloading
        return Observable.of(true).delay(7000).flatMap(_ => fn());
    }
}

export const routing: ModuleWithProviders = RouterModule.forRoot(
    appRoutes,
    { preloadingStrategy: SelectedPreloadingStrategy, enableTracing: false },
);

export const APP_ROUTES_MODULE_PROVIDER = [SelectedPreloadingStrategy];


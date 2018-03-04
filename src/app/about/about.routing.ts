import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './about.guard';
import { AboutSecureComponent } from './aboutSecure.component';
import { AboutFallbackComponent } from './aboutFallback.component';

const aboutRoutes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'secure',
        component: AboutSecureComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fallback',
        component: AboutFallbackComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(
    aboutRoutes
);

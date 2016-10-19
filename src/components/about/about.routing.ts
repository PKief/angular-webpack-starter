import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const aboutRoutes: Routes = [
    { path: '', component: AboutComponent }
]

export const routing: ModuleWithProviders = RouterModule.forChild(
    aboutRoutes
);
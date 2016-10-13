import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const ROUTES: Routes = [
    { path: '', component: AboutComponent }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }
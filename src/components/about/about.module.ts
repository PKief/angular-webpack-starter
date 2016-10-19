import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { routing } from './about.routing';

@NgModule({
    imports: [
        routing
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }
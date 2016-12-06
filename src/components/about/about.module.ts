import { NgModule, Component } from '@angular/core';
import { AboutComponent } from './about.component';
import { routing } from './about.routing';
import { AuthGuard } from './about.guard';
import { AboutSecureComponent } from './aboutSecure.component';
import { AboutFallbackComponent } from './aboutFallback.component';

@NgModule({
    imports: [
        routing,
    ],
    declarations: [
        AboutComponent,
        AboutSecureComponent,
        AboutFallbackComponent,
    ],
    providers: [
        AuthGuard,
    ]
})
export class AboutModule { }
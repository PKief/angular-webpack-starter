import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'about',
    template: `
        <h1>I am about</h1>
        <a routerLink="secure">Secure</a>
        <a routerLink="fallback">Fallback</a>
    `
})
export class AboutComponent {
    params: string[];

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(p => {
            // console.log(p);
        });
    }
}

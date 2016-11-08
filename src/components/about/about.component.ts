import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'about',
    template: `
        <h1>I am about</h1>
    `
})
export class AboutComponent {
    params: string[];

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(p => {
            console.log(p);
        });
    }
}

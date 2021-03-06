import { Router, NavigationExtras } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
    constructor(private router: Router) { }

    myQueryParams = [
        { id: 1, param: 'myParam' },
        { id: 2, param: 'myParam' },
        { id: 3, param: 'myParam' },
        { id: 4, param: 'myParam' },
        { id: 5, param: 'myParam' },
    ];

    showPopups() {
        this.router.navigate(['/app/welcome', { outlets: { 'popup': 'message', 'popup2': 'message2' } }]);

        this.router.navigate(['/app/settings'], {
            queryParams: {
                filter: Buffer.from(JSON.stringify(this.myQueryParams), 'base64')
            }
        });
    }

    hidePopups() {
        this.router.navigate(['/app/welcome', { outlets: { 'popup': null, 'popup2': null } }]);
    }

    goToAboutWithParams() {
        const navigationExtras: NavigationExtras = {
            queryParams: { 'something': 1 },
        };
        this.router.navigate(['/app/about', { dataForm: 'test', page: '2' }], navigationExtras);
    }
}

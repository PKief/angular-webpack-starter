import { Router, NavigationExtras } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'welcome',
    templateUrl: 'src/components/welcome/welcome.component.html'
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
                filter: new Buffer(JSON.stringify(this.myQueryParams)).toString('base64')
            }
        });
    }

    hidePopups() {
        this.router.navigate(['/app/welcome', { outlets: { 'popup': null, 'popup2': null } }]);
    }

    goToAboutWithParams() {
        let navigationExtras: NavigationExtras = {
            queryParams: { "something": 1 },
        };
        this.router.navigate(['/app/about', { dataForm: 'test', page: '2' }], navigationExtras);
    }
}
import { Router, NavigationExtras } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    constructor(private router: Router) { }

    showPopups() {
        this.router.navigate(['/app/welcome', { outlets: { 'popup': 'message', 'popup2': 'message2' } }]);
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
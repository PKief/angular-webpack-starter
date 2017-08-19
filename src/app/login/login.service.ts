import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    private loggedIn: boolean = false;

    constructor(private router: Router) {
        this.loggedIn = !!localStorage.getItem('loggedIn');
    }

    login() {
        localStorage.setItem('loggedIn', 'true');
        this.loggedIn = true;
        this.router.navigate(['/app']);
    }

    logout() {
        localStorage.removeItem('loggedIn');
        this.loggedIn = false;
        this.router.navigate(['/login']);
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    private loggedIn = false;

    constructor(private router: Router) {
        this.loggedIn = !!localStorage.getItem('loggedIn');
    }

    login() {
        localStorage.setItem('loggedIn', 'true');
        this.loggedIn = true;
        return true;
    }

    logout() {
        localStorage.removeItem('loggedIn');
        this.loggedIn = false;
        this.router.navigate(['/']);
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}
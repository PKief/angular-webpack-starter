import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoggedOutGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }

    canActivate() {
        if (this.loginService.isLoggedIn() === true) {
            this.router.navigate(['/start']);
            return false;
        } else {
            return true;
        }
    }
}
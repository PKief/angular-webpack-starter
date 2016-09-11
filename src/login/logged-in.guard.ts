import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }

    canActivate() {
        if (this.loginService.isLoggedIn() !== true) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }
}
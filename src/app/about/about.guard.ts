import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, NavigationExtras, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    condition: boolean;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.condition = true;
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.condition) {
            this.router.navigate([this.router.url, 'fallback']);
            return false;
        } else {
            return true;
        }
    }
}

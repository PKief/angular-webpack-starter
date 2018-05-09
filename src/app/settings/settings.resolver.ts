import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Setting } from './setting';
import { SettingsService } from './settings.service';

@Injectable()
export class SettingsResolver implements Resolve<any> {
    constructor(
        private settingsService: SettingsService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Setting[]> {
        return from(this.settingsService.getSettingsFromCategory(route.params['category']));
    }
}

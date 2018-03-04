import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { SettingsService } from './settings.service';
import { Setting } from './setting';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class SettingsResolver implements Resolve<any> {
    constructor(
        private settingsService: SettingsService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Setting[]> {
        return Observable.fromPromise(this.settingsService.getSettingsFromCategory(route.params['category']));
    }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingCategoriesService, Setting, Category } from './settingCategories.service';

@Injectable()
export class SettingCategoriesResolver implements Resolve<any> {
    constructor(
        private settingCategoriesService: SettingCategoriesService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Setting[]> {         
        // return Observable.fromPromise(this.settingCategoriesService.getAllSettings());
        // let categ: Category;
        // switch(route.params['category']){
        //     case 'basic':
        //         categ = Category.Basic;
        //     case 'profile':
        //         categ = Category.Profile;
        //     default:
        //         categ = Category.Profile;
        // }
        return Observable.fromPromise(this.settingCategoriesService.getSettingsFromCategory(route.params['category']));
    }
}
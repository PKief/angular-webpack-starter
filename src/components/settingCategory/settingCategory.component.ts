import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Setting, Category } from './../settingCategories/settingCategories.service';

@Component({
    selector: 'setting-category',
    templateUrl: './settingCategory.component.html'
})
export class SettingCategoryComponent implements OnInit {
    // settings: Setting[];
    settings: Observable<Setting>;
    title: string;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe((_: any) => {
            this.title = _.category
            // this.settings = this.route.snapshot.data['settings'];
        });
        this.settings = this.route.data.pluck('settings');
    }

    filterSettings(category: string) {
        return this.settings.filter(setting => setting.category === category);
    }
}
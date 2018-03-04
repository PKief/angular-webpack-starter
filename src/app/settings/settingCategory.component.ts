import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Setting } from './setting';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
    selector: 'app-setting-category',
    templateUrl: './settingCategory.component.html'
})
export class SettingCategoryComponent implements OnInit {
    // settings: Setting[];
    settings: Observable<{}>;
    title: string;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe((_: any) => {
            this.title = _.category;
            // this.settings = this.route.snapshot.data['settings'];
        });
        this.settings = this.route.data.pluck('settings');
    }
}

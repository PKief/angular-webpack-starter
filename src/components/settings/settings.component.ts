import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslationService } from './../translation';

@Component({
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    constructor(private route: ActivatedRoute, private router: Router, private translationService: TranslationService) { }

    changeLanguage(language: string) {
        this.translationService.use(language);
    }

    goBack(){
        // this.router.navigate(['../'], {relativeTo: this.route});
        this.router.navigate(['./'], {relativeTo: this.route});
    }
}
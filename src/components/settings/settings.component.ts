import { Component } from '@angular/core';
import { TranslationService } from './../translation';

@Component({
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    constructor(private translationService: TranslationService) { }

    changeLanguage(language: string) {
        this.translationService.use(language);
    }
}
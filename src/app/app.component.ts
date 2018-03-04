import { Component, OnInit } from '@angular/core';
import { TranslationService } from './translation';

require('./../styles/styles.global.scss');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public translatedText: string;
    public supportedLanguages: any[];
    constructor(private translationService: TranslationService) { }

    ngOnInit() {
        // set default language
        const language = navigator.language;
        const fallback = 'en';
        this.translationService.use(language || fallback);
        this.translationService.setFallbackLanguage(fallback);
    }
}

import { Component, OnInit } from '@angular/core';
import { TranslationService } from './../translation';

require('./../../styles/styles.global.scss');

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public translatedText: string;
    public supportedLanguages: any[];
    constructor(private translationService: TranslationService) { }

    ngOnInit() {
        // set default language
        let language = navigator.language;
        // this.translationService.use('de');        
        this.translationService.use(language);
        this.translationService.setDefaultLanguage('en');
        this.translationService.enableFallback(true);
    }
}

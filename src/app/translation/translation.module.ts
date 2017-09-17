import { NgModule } from '@angular/core';
import { TranslatePipe, TranslationService, TRANSLATION_PROVIDERS } from './../translation';

@NgModule({
    declarations: [
        TranslatePipe,
    ],
    exports: [
        TranslatePipe
    ],
    providers: [
        TRANSLATION_PROVIDERS,
        TranslationService,
    ]
})
export class TranslationModule { }
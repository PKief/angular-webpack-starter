import { NgModule } from '@angular/core';
import { TranslatePipe, TranslationService } from './../translation';

@NgModule({
    declarations: [
        TranslatePipe,
    ],
    exports: [
        TranslatePipe
    ],
    providers: [
        TranslationService,
    ]
})
export class TranslationModule { }
import { NgModule } from '@angular/core';
import { TranslatePipe } from './../translation';

@NgModule({
    declarations: [
        TranslatePipe,
    ],
    exports: [
        TranslatePipe
    ]
})
export class TranslationModule { }
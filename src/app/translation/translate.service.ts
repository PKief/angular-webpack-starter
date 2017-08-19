// Implementation has been taken from here:
// https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-1

import { Injectable, Inject, EventEmitter } from '@angular/core';
import { TRANSLATIONS } from './translations';
import * as _ from 'lodash';

@Injectable()
export class TranslationService {
    private _currentLanguage: string;
    private _defaultLanguage: string;
    private _fallback: boolean;

    /** Returns the current language  */
    public get currentLanguage() {
        return this._currentLanguage || this._defaultLanguage;
    }

    constructor( @Inject(TRANSLATIONS) private _translations: any) {
    }

    /** Subscribe to language changes */
    public onLanguageChanged: EventEmitter<string> = new EventEmitter<string>();

    /** Set up the default language */
    public setDefaultLanguage(language: string) {
        this._defaultLanguage = language;
    }

    /** Enable translation fallback.
     * The fallback is required when the application
     * does not know the translation of a word. */
    public enableFallback(enable: boolean) {
        this._fallback = enable;
    }

    /** Set the current language */
    public use(language: string): void {
        this._currentLanguage = language;
        this.onLanguageChanged.emit(language);
    }

    /** Translate a key */
    private translate(key: string): any {
        let translation = key;

        // found in current language
        if (this._translations[this._currentLanguage] && _.get(this._translations[this.currentLanguage], key)) {
            return _.get(this._translations[this.currentLanguage], key);
        }

        // fallback disabled
        if (!this._fallback) {
            return translation;
        }

        // found in default language
        if (this._translations[this._defaultLanguage] && _.get(this._translations[this._defaultLanguage], key)) {
            return _.get(this._translations[this._defaultLanguage], key);
        }

        // not found
        return translation;
    }

    /**
     * The instant method is required for the translate pipe.
     * It helps to translate a word instantly.
     */
    public instant(key: string, words?: string | string[]) {
        const translation: string = this.translate(key);

        if (!words) return translation;
        return this.replace(translation, words);
    }

    /**
     * The placeholder is a possibility to set a placeholder in the translation
     * in the view and this translation service will replace the placeholder
     * with the value.
     *
     * **translation file:**
     * ```
     * 'hello greet': 'Hello %0 %1'
     * ```
     *
     * %0 and %1 are placeholders which will be replaced in the translation with the given values:
     *
     * **component.ts:**
     *
     * ```js
     * this.translate.instant('hello greet', [customer.firstName, customer.lastName]);
     * ```
     *
     * or in the html with the pipe:
     *
     * ```html
     * <p>{{ 'hello greet' | translate: [customer.firstName, customer.lastName] }}</p>
     * ```
     */
    private PLACEHOLDER = '%';

    /**
     * The replace function will replace the current placeholder with the
     * data parameter from the translation. You can give it one or more optional
     * parameters ('words').
     */
    public replace(word: string = '', words: string | string[]) {
        let translation: string = word;

        const values: string[] = [].concat(words);
        values.forEach((e, i) => {
            translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e);
        });

        return translation;
    }
}
import { Injectable, Inject, EventEmitter } from '@angular/core';
import { TRANSLATIONS } from './translations';
import * as _ from 'lodash';

@Injectable()
export class TranslationService {
    private _currentLanguage: string;
    private _defaultLanguage: string;
    private _fallback: boolean;

    public get currentLanguage() {
        return this._currentLanguage || this._defaultLanguage;
    }

    constructor( @Inject(TRANSLATIONS) private _translations: any) {
    }

    public onLanguageChanged: EventEmitter<string> = new EventEmitter<string>();

    public setDefaultLanguage(language: string) {
        this._defaultLanguage = language;
    }

    public enableFallback(enable: boolean) {
        this._fallback = enable;
    }

    // set the current language
    public use(language: string): void {
        this._currentLanguage = language;
        this.onLanguageChanged.emit(language);
    }

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

    public instant(key: string, words?: string | string[]) {
        const translation: string = this.translate(key);

        if (!words) return translation;
        return this.replace(translation, words);
    }

    private PLACEHOLDER = '%';

    public replace(word: string = '', words: string | string[]) {
        let translation: string = word;

        const values: string[] = [].concat(words);
        values.forEach((e, i) => {
            translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e)
        });

        return translation;
    }
}
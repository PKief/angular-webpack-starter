import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TranslationService {
    private _currentLanguage: string;
    private _fallbackLanguage: string;
    private _translations: any;

    /** Subscribe to language changes */
    public onLanguageChanged: EventEmitter<string> = new EventEmitter<string>();

    /** Returns the current language  */
    public get currentLanguage() {
        return this._currentLanguage || this._fallbackLanguage;
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

    constructor() {
        this._translations = {};
    }

    /** Get the translation object of the separated translation files */
    private async getTranslationObject(language: string) {
        try {
            const lang = await import('./lang-' + language);
            const module = new lang.Translation();
            return module.translation;
        } catch (error) {
            console.error(error);
            return Promise.reject(error);
        }
    }

    /** Set the current language */
    public use(language: string) {
        return this.getTranslationObject(language).then((translation) => {
            this._currentLanguage = language;
            this._translations[language] = translation;
            this.onLanguageChanged.emit(language);
        });
    }

    /** Initialize default fallback language */
    public setFallbackLanguage(language: string) {
        return this.getTranslationObject(language).then((translation) => {
            this._fallbackLanguage = language;
            this._translations[language] = translation;
        });
    }

    /** Translate a key */
    private translate(key: string): any {
        if (!this._translations) {
            return key;
        }

        // found in current language
        if (this._translations[this._currentLanguage] && getValue(this._translations[this._currentLanguage], key)) {
            return getValue(this._translations[this._currentLanguage], key);
        }

        // use fallback language
        if (this._translations[this._fallbackLanguage] && getValue(this._translations[this._fallbackLanguage], key)) {
            return getValue(this._translations[this._fallbackLanguage], key);
        }

        if (!this._fallbackLanguage) {
            console.warn('No fallback language set!');
        }

        // not found
        return key;
    }

    /**
     * The instant method is required for the translate pipe.
     * It helps to translate a word instantly.
     */
    public instant(key: string, words?: string | string[]) {
        const translation: string = this.translate(key);

        if (!words) { return translation; }
        return this.replace(translation, words);
    }

    /**
     * The replace function will replace the current placeholder with the
     * data parameter from the translation. You can give it one or more optional
     * parameters ('words').
     */
    private replace(word: string = '', words: string | string[]) {
        let translation: string = word;

        const values: string[] = [].concat(words);
        values.forEach((e, i) => {
            translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e);
        });

        return translation;
    }
}

/** Get the nested keys of an object (http://stackoverflow.com/a/6491621/6942210)
 *
 * *This solution is lighter than the lodash get-version and works fine for the translations.* */
const getValue = (obj: any, key: string): string => {
    // convert indexes to properties
    key = key.replace(/\[(\w+)\]/g, '.$1');

    // strip a leading dot
    key = key.replace(/^\./, '');

    // separate keys in array
    const keyArray = key.split('.');

    /** Avoid errors in the getValue function. */
    const isObject = (object) => {
        return object === Object(object);
    };

    for (let i = 0; i < keyArray.length; ++i) {
        const k = keyArray[i];
        if (isObject(obj) && k in obj) {
            obj = obj[k];
        } else {
            return;
        }
    }
    return obj;
};

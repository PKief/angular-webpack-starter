import { OpaqueToken } from '@angular/core';

import { LANG_EN_NAME, LANG_EN_TRANSLATIONS } from './lang-en';
import { LANG_DE_NAME, LANG_DE_TRANSLATIONS } from './lang-de';

export const TRANSLATIONS = new OpaqueToken('translations');

// links all of the translations
const dictionary = {
    [LANG_DE_NAME]: LANG_DE_TRANSLATIONS,
    [LANG_EN_NAME]: LANG_EN_TRANSLATIONS
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary }
];
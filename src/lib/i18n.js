import I18n, { getLanguages } from 'react-native-i18n'
import { en, ar } from '../config/';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

I18n.translations = {
    'en': en,
    'ar': ar
}

export const i18n = I18n;
export const languages = getLanguages;
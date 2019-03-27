/** Get the nested keys of an object (http://stackoverflow.com/a/6491621/6942210)
 *
 * *This solution is lighter than the lodash get-version and works fine for the translations.* */
export const getValue = (obj: any, key: string): string => {
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

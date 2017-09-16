
const objectIs: (value1: any, value2: any) => boolean = require('object-is'); // tslint:disable-line:no-var-requires

export const isSamePolyfill = objectIs;
export const isSame = Object.is || isSamePolyfill;

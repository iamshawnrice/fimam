"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fpush = void 0;
const fpush = (array, ...rest) => {
    return array.concat(...rest);
};
exports.fpush = fpush;

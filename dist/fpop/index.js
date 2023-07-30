"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fpop = void 0;
const fpop = (array) => {
    const newArray = array.slice(0, -1);
    return newArray;
};
exports.fpop = fpop;

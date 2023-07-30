"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fsplice = void 0;
const fsplice = (array, startingIndex, numberOfElementsToBeRemoved, ...elementsToBeAdded) => {
    const preSplice = array.slice(0, startingIndex);
    const postSplice = array.slice(startingIndex + numberOfElementsToBeRemoved);
    return [].concat(...preSplice, ...elementsToBeAdded, ...postSplice);
};
exports.fsplice = fsplice;

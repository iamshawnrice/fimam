export type FSpliceType<T = any, O = T | any> = (array: T[], startingIndex: number, numberOfElementsToBeRemoved: number, ...elementsToBeAdded: O[]) => O[];

export const fsplice: FSpliceType = (array, startingIndex, numberOfElementsToBeRemoved, ...elementsToBeAdded) => {
    const preSplice = array.slice(0, startingIndex);
    const postSplice = array.slice(startingIndex + numberOfElementsToBeRemoved);

    return [].concat(...preSplice, ...elementsToBeAdded, ...postSplice);
}
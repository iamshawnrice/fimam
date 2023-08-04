export type FUnshiftType<T = any, E = any, O = T | any> = (array: T[], ...elementsToBeAdded: E[]) => O[];

export const funshift: FUnshiftType = (array, ...elementsToBeAdded) => {
    return [...elementsToBeAdded].concat(array);
}
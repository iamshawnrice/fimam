export type FPushType<T = void, O = T | void> = (array: T[], elementsToBeAdded: T[]) => O[];

export const fpush: FPushType = (array, ...rest) => {
    return array.concat(...rest);
}
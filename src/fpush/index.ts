export type FPushType<T = any, O = T | any> = (array: T[], elementsToBeAdded: T[]) => O[];

export const fpush: FPushType = (array, ...rest) => {
    return array.concat(...rest);
}
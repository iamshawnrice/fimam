export type FPopType<T = any> = (array: T[]) => T[];

export const fpop: FPopType = (array) => {
    const newArray = array.slice(0, -1);

    return newArray;
}
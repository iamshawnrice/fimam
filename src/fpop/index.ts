export type FPopType<T = void> = (array: T[]) => T[];

export const fpop: FPopType = (array) => {
    const newArray = array.slice(0, -1);

    return newArray;
}
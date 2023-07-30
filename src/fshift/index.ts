export type FShiftType<T = any> = (array: T[]) => T[];

export const fshift: FShiftType = (array) => {
    return array.slice(1);
}
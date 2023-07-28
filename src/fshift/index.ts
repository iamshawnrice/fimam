export type FShiftType<T = void> = (array: T[]) => T[];

export const fshift: FShiftType = (array) => {
    return array.slice(1);
}
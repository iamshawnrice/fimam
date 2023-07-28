import { fshift } from './index';

describe(fshift.name, () => {
    describe('given an array of unknown elements', () => {
        const array = [1, 2, 3, 4, 5];

        it('returns a copy of the passed array with the first element removed', () => {
            const pureCopy = [...array];
            const mutatedCopy = [...array];

            mutatedCopy.shift();

            expect(fshift(pureCopy)).toEqual(mutatedCopy);
            expect(pureCopy).toEqual(array);
        })
    });
})
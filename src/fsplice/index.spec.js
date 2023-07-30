import { fsplice } from './index';

describe(fsplice.name, () => {
    describe('given an array of unknown elements', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        it('returns a copy of the passed array with the passed number of elements removed starting at the passed index', () => {
            const pureCopy = [...array];
            const mutatedCopy = [...array];

            mutatedCopy.splice(3, 3);

            expect(fsplice(pureCopy, 3, 3)).toEqual(mutatedCopy);
            expect(pureCopy).toEqual(array);
        });

        it('returns a copy of the passed array with the passed elements to be added, added at the passed index', () => {
            const pureCopy = [...array];
            const mutatedCopy = [...array];

            mutatedCopy.splice(3, 0, true, false, 'forty four');

            expect(fsplice(pureCopy, 3, 0, true, false, 'forty four')).toEqual(mutatedCopy);
            expect(pureCopy).toEqual(array);
        });
    });
});
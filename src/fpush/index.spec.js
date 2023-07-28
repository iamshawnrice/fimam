import { fpush } from './index';

describe(fpush.name, () => {
    describe('given an array of unknown elements', () => {
        const array = [1, 44, true, 'string', { key: 'val' }, 99];

        it('returns a copy of the passed array with the passed elements appended to it', () => {
            const mutatedCopy = [...array];
            const pureCopy = [...array];

            mutatedCopy.push('22', 33, false);

            expect(fpush(pureCopy, '22', 33, false)).toEqual(mutatedCopy);
            expect(pureCopy).toEqual(array);
        });

        it('returns a copy of the two passed arrays concatenated in order', () => {
            const mutatedCopy = [...array];
            const pureCopy = [...array];

            mutatedCopy.push(...[55, '', { something: 'else' }]);

            expect(fpush(pureCopy, [55, '', { something: 'else' }])).toEqual(mutatedCopy);
            expect(pureCopy).toEqual(array);
        });
    });
});
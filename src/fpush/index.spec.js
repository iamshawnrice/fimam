import { fpush } from './index';

describe(fpush.name, () => {
    describe('given an array of unknown elements', () => {
        const array = [1, 44, true, 'string', { key: 'val' }, 99];

        it('appends the passed elements to the passed array', () => {
            const mutatedCopy = [...array];
            const pureCopy = [...array];

            mutatedCopy.push('22', 33, false);

            expect(fpush(pureCopy, '22', 33, false)).toEqual(mutatedCopy);
        });

        it('concatenates a passed array to the passed array', () => {
            const mutatedCopy = [...array];
            const pureCopy = [...array];

            mutatedCopy.push(...[55, '', { something: 'else' }]);

            expect(fpush(pureCopy, [55, '', { something: 'else' }])).toEqual(mutatedCopy);
        });
    });
});
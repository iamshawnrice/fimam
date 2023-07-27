import { describe } from '@jest/globals';
import { fpop } from './index';

describe(fpop.name, () => {
    describe('given an array of unknown elements', () => {
        const array = [1, 44, true, 'string', { key: 'val' }, 99];

        it('returns a copy of the given array including all but the last element', () => {
            const mutatedCopy = [...array];
            const pureCopy = [...array];
            mutatedCopy.pop();

            expect(fpop(array)).toEqual(mutatedCopy);
            expect(array).toEqual(pureCopy);
        })
    })
});
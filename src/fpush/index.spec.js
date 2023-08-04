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
    
        it('should handle empty array input', () => {
            const result = fpush([], 'a', 'b', 'c');
            expect(result).toEqual(['a', 'b', 'c']);
        });
    
        it('should handle adding no elements', () => {
            const originalArray = [10, 20, 30];
            const result = fpush(originalArray);
            expect(result).toEqual([10, 20, 30]);
        });
    
        it('should handle arrays with different data types', () => {
            const result = fpush([1, 'two'], true, { key: 'value' });
            expect(result).toEqual([1, 'two', true, { key: 'value' }]);
        });
    
        it('should not modify the original array', () => {
            const originalArray = ['x', 'y', 'z'];
            const result = fpush(originalArray, 'a', 'b');
            expect(result).toEqual(['x', 'y', 'z', 'a', 'b']);
            expect(originalArray).toEqual(['x', 'y', 'z']);
        });
    });
});
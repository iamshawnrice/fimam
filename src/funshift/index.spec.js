import { funshift } from './index';

describe(funshift.name, () => {
    describe('with an array of unknown elements', () => {
        const array = [1, 2, 3];

        it('prepends the passed elements to the passed array', () => {
            const pureCopy = [...array];
            const mutatedCopy = [...array];

            mutatedCopy.unshift('a', 'b', 'c');

            expect(funshift(pureCopy, 'a', 'b', 'c')).toEqual(mutatedCopy);
            expect(pureCopy).toEqual(array);
        });

        it('prepends a passed array to the passed array', () => {
            const pureCopy = [...array];
            const mutatedCopy = [...array];

            mutatedCopy.unshift(['a', 'b', 'c']);

            expect(funshift(pureCopy, ['a', 'b', 'c'])).toEqual(mutatedCopy);
            expect(pureCopy).toEqual(array)
        });

        it('should add elements to the beginning of the array', () => {
            const result = funshift([1, 2, 3], 4, 5);

            expect(result).toEqual([4, 5, 1, 2, 3]); 
        });
    
        it('should handle empty array input', () => {
            const result = funshift([], 'a', 'b', 'c');

            expect(result).toEqual(['a', 'b', 'c']);
        });
    
        it('should handle empty elementsToBeAdded input', () => {
            const result = funshift(['x', 'y', 'z']);

            expect(result).toEqual(['x', 'y', 'z']);
        });
    
        it('should handle different types of elements', () => {
            const result = funshift([1, 2], 'a', { key: 'value' }, [3, 4]);

            expect(result).toEqual(['a', { key: 'value' }, [3, 4], 1, 2]);
        });
    });
});
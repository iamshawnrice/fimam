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
        });

        it('should remove the first element from the array', () => {
            const result = fshift([1, 2, 3, 4, 5]);
            expect(result).toEqual([2, 3, 4, 5]);
        });
    
        it('should handle empty array input', () => {
            const result = fshift([]);
            expect(result).toEqual([]);
        });
    
        it('should handle arrays with a single element', () => {
            const result = fshift(['only']);
            expect(result).toEqual([]);
        });
    
        it('should handle arrays with different data types', () => {
            const result = fshift([true, 'hello', 42, { key: 'value' }]);
            expect(result).toEqual(['hello', 42, { key: 'value' }]);
        });
    
        it('should not modify the original array', () => {
            const originalArray = [10, 20, 30];
            const result = fshift(originalArray);
            expect(result).toEqual([20, 30]);
            expect(originalArray).toEqual([10, 20, 30]);
        });
    });
})
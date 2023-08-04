import { describe } from '@jest/globals';
import { fpop } from './index';

describe(fpop.name, () => {
    describe('given an array of unknown elements', () => {
        const array = [1, 44, true, 'string', { key: 'val' }, 99];

        it('returns a copy of the passed array including all but the last element without mutating the passed array', () => {
            const mutatedCopy = [...array];
            const pureCopy = [...array];
            mutatedCopy.pop();

            expect(fpop(array)).toEqual(mutatedCopy);
            expect(pureCopy).toEqual(array);
        });
        
        it('should handle empty array input', () => {
            const result = fpop([]);
            expect(result).toEqual([]);
        });
        
        it('should handle arrays with a single element', () => {
            const result = fpop(['only']);
            expect(result).toEqual([]);
        });
        
        it('should handle arrays with different data types', () => {
            const result = fpop([true, 'hello', 42, { key: 'value' }]);
            expect(result).toEqual([true, 'hello', 42]);
        });
        
        it('should not modify the original array', () => {
            const originalArray = [10, 20, 30];
            const result = fpop(originalArray);
            expect(result).toEqual([10, 20]);
            expect(originalArray).toEqual([10, 20, 30]);
        });
    });
});
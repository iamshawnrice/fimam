# Functional Implementations of Mutative Array Methods

## API

### fpop

Designed to mimic the [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) native array method, fpop takes an array and appends the remaining arguments to it.


``````
import { fpop } from 'fimam';

const startingArray = [1, 2, 3];
const newArray = fpop(startingArray, 4, 5, 6);

console.log(newArray) => [1, 2, 3, 4, 5, 6];
``````

### fpush

Designed to mimic the [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) native array method, fpush takes an array and removes the last element from it.

``````
import { fpush } from 'fimam';

const startingArray = [1, 2, 3, 4, 5];
const newArray = fpush(startingArray);

console.log(newArray) => [1, 2, 3, 4];
``````
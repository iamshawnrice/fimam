# Functional Implementations of Mutative Array Methods

A set of simple utilities for working with Arrays without modifying them.

## Installation

Install from npm via your package manager of choice;

```
npm install fimam
```

```
yarn add fimam
```

## API

### fpop

Designed to mimic the [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) native array method, fpop takes an array and returns a copy, omitting the element with the highest index.


``````
import { fpop } from 'fimam';

const startingArray = [1, 2, 3, 4, 5];
const newArray = fpush(startingArray);

console.log(newArray) => [1, 2, 3, 4];
``````

### fpush

Designed to mimic the [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) native array method, fpush takes an array and returns a copy, appending the remaining arguments to it.

``````
import { fpush } from 'fimam';

const startingArray = [1, 2, 3];
const newArray = fpop(startingArray, 4, 5, 6);

console.log(newArray) => [1, 2, 3, 4, 5, 6];
``````

If the element to be added is another array, fpush will return a copy with the two concatenated in order.

``````
import { fpush } from 'fimam';

const startingArray = [1, 2, 3];
const newArray = fpop(startingArray, [4, 5, 6]);

console.log(newArray) => [1, 2, 3, 4, 5, 6];
``````

### fshift

Designed to mimic the [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) native array method, fshift takes an array and returns a copy, omitting the element with the lowest index.

``````
import { fshift } from 'fimam';

const startingArray = [1, 2, 3, 4, 5];
const newArray = fshift(startingArray);

console.log(newArray) => [2, 3, 4, 5];
``````

### fsplice

Designed to mimic the [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) native array method, fshift takes an array and returns a copy, having removed the passed number of elements starting at the passed index.

``````
import { fsplice } from 'fimam';

const startingArray = [1, 2, 3, 4, 5];
const newArray = fsplice(startingArray, 1, 2);

console.log(newArray) => [1, 2, 5];
``````

If additional elements are passed, they will be added to the modified array, starting at the passed index.

``````
import { fsplice } from 'fimam';

const startingArray = [1, 2, 3, 4, 5];
const newArray = fsplice(startingArray, 1, 2, 'three', 'four');

console.log(newArray) => [1, 2, 'three', 'four', 5];
``````

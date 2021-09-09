const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const reducing = arrays.reduce((accumulator, index) => {
    return accumulator + ', ' + index;
});

const toarray = reducing.split(',');

assert.deepStrictEqual(toarray, ['1', '2', '3', true, '4', '5', '6']);
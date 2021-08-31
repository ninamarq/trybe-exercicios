const assert = require('assert');
// escreva a função wordLengths aqui
wordLengths = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i ++) {
        let counter = array[i].length;
        newArray.push(counter);
    }
    return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);